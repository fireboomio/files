package customize

import (
	"custom-go/pkg/plugins"
	"github.com/graphql-go/graphql"
	"log"
	"time"
)

type Person struct {
	Id        int    `json:"id"`
	FirstName string `json:"firstName"`
	LastName  string `json:"lastName"`
}

var testPeopleData = []Person{
	{Id: 1, FirstName: "John", LastName: "Doe"},
	{Id: 2, FirstName: "Jane", LastName: "Doe"},
}
var personType = graphql.NewObject(graphql.ObjectConfig{
	Name: "Person",
	Fields: graphql.Fields{
		"id":        &graphql.Field{Type: graphql.Int},
		"firstName": &graphql.Field{Type: graphql.String},
		"lastName":  &graphql.Field{Type: graphql.String},
	},
})

var (
	queryFields = graphql.Fields{
		"GetOnePerson": &graphql.Field{
			Type: personType,
			Args: graphql.FieldConfigArgument{
				"id": &graphql.ArgumentConfig{
					Type: graphql.Int,
				},
			},
			Resolve: func(params graphql.ResolveParams) (res interface{}, err error) {
				_, _, err = plugins.ResolveArgs[any](params)
				if err != nil {
					return
				}
				id, ok := params.Args["id"].(int)
				if ok {
					for _, p := range testPeopleData {
						if p.Id == id {
							return p, nil
						}
					}
				}
				return "ok", nil
			},
		},
	}

	mutationFields = graphql.Fields{
		"UpdateOnePerson": &graphql.Field{
			Type: personType,
			Args: graphql.FieldConfigArgument{
				"id": &graphql.ArgumentConfig{
					Type: graphql.Int,
				},
				"firstName": &graphql.ArgumentConfig{
					Type: graphql.String,
				},
				"lastName": &graphql.ArgumentConfig{
					Type: graphql.String,
				},
			},
			Resolve: func(params graphql.ResolveParams) (interface{}, error) {
				_ = plugins.GetGraphqlContext(params)
				id, ok := params.Args["id"].(int)
				if ok {
					for _, p := range testPeopleData {
						if p.Id == id {
							firstName, ok := params.Args["firstName"].(string)
							if ok {
								p.FirstName = firstName
							}

							lastName, ok := params.Args["lastName"].(string)
							if ok {
								p.LastName = lastName
							}
							return p, nil
						}
					}
				}
				return nil, nil
			},
			Description: "Update Person By Id",
		},
	}

	subscriptionFields = graphql.Fields{
		"SubscriptionPerson": &graphql.Field{
			Type: personType,
			Resolve: func(params graphql.ResolveParams) (interface{}, error) {
				return params.Source, nil
			},
			Subscribe: func(params graphql.ResolveParams) (interface{}, error) {
				c := make(chan interface{})

				go func() {
					var i int
					for {
						i++
						person := Person{Id: i, FirstName: "John", LastName: "Doe"}

						select {
						case <-params.Context.Done():
							log.Println("[RootSubscription] [Subscribe] subscription canceled")
							close(c)
							return
						default:
							c <- person
						}

						time.Sleep(250 * time.Millisecond)

						if i == 21 {
							close(c)
							return
						}
					}
				}()

				return c, nil

			},
		},
	}
)

var <%= it.upperFirst(it.name) %>_schema, _ = graphql.NewSchema(graphql.SchemaConfig{
	Query: graphql.NewObject(graphql.ObjectConfig{
		Name:   "query",
		Fields: queryFields,
	}),
	Mutation: graphql.NewObject(graphql.ObjectConfig{
		Name:   "mutation",
		Fields: mutationFields,
	}),
	Subscription: graphql.NewObject(graphql.ObjectConfig{
		Name:   "subscription",
		Fields: subscriptionFields,
	}),
})

func init() {
	plugins.RegisterGraphql(&<%= it.upperFirst(it.name) %>_schema)
}
