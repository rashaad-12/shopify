package com.blume.productservice.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.math.BigDecimal;

@Document(collection = "products")
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Data
public class Product {

    @Id
    @Field("sku_code")
    private String id;

    @Field("name")
    private String name;

    @Field("brand")
    private String brand;

    @Field("description")
    private String description;

    @Field("image")
    private String url;

    @Field("price")
    private BigDecimal price;

    @Field("quantity")
    private Integer quantity;
}
