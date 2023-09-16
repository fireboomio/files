package io.fireboom.customize;

import io.fireboom.plugins.CustomizeHooks;
import graphql.Scalars;
import graphql.schema.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

import java.util.Arrays;

@Slf4j
@Component(value = "customize/<%= it.customizeName %>")
public class <%= it.customizeName %> extends CustomizeHooks {
    GraphQLObjectType bookType = GraphQLObjectType.newObject()
                                                  .name("Book")
                                                  .field(GraphQLFieldDefinition.newFieldDefinition()
                                                                               .name("id")
                                                                               .type(Scalars.GraphQLID))
                                                  .field(GraphQLFieldDefinition.newFieldDefinition()
                                                                               .name("title")
                                                                               .type(Scalars.GraphQLString))
                                                  .field(GraphQLFieldDefinition.newFieldDefinition()
                                                                               .name("author")
                                                                               .type(Scalars.GraphQLString))
                                                  .build();
    GraphQLObjectType queryType = GraphQLObjectType.newObject()
                                                   .name("Query")
                                                   .field(GraphQLFieldDefinition.newFieldDefinition()
                                                                                .name("books")
                                                                                .type(new GraphQLList(bookType))
                                                                                .dataFetcher(environment -> {
                                                                                    // 在这里编写获取图书数据的逻辑
                                                                                    // 这里简单返回一个示例数据
                                                                                    return Arrays.asList(new Book("1", "Book 1", "Author 1"),
                                                                                                         new Book("2", "Book 2", "Author 2"));
                                                                                }))
                                                   .build();
    GraphQLObjectType subscriptionType = GraphQLObjectType.newObject()
                                                          .name("Subscription")
                                                          .field(GraphQLFieldDefinition.newFieldDefinition()
                                                                                       .name("book")
                                                                                       .type(bookType)
                                                                                       .argument(GraphQLArgument.newArgument()
                                                                                                                .name("channel")
                                                                                                                .type(Scalars.GraphQLString))
                                                                                       .dataFetcher(environment -> {
                                                                                           // 在这里编写订阅新消息的逻辑
                                                                                           // 这里简单返回一个新创建的消息对象
                                                                                           return new Book("1", "Book 1", "Author 1");
                                                                                       }))
                                                          .build();


    GraphQLSchema schema = GraphQLSchema.newSchema().query(queryType).subscription(subscriptionType).build();

    @Override
    protected GraphQLSchema schema() {
        return schema;
    }

    @Data
    @AllArgsConstructor
    static class Book {
        private String id;
        private String title;
        private String author;
    }
}
