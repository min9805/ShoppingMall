package com.example.demo;

import java.time.LocalDateTime;

public class Product {
    private Long id;
    private String prodName;
    private String imgName;
    private String imgPath;
    private String content;
    private Long price;
    private LocalDateTime createdAt;
    private String createdBy;

    public String getProdName() {
        return prodName;
    }

    public Long getId() {
        return id;
    }

    public String getImgName() {
        return imgName;
    }

    public String getImgPath() {
        return imgPath;
    }

    public String getContent() {
        return content;
    }

    public Long getPrice() {
        return price;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public String getCreatedBy() {
        return createdBy;
    }

    @Override
    public String toString() {
        return "Product{" +
                "id=" + id +
                ", prodName='" + prodName + '\'' +
                ", imgName='" + imgName + '\'' +
                ", imgPath='" + imgPath + '\'' +
                ", content='" + content + '\'' +
                ", price=" + price +
                ", createdAt=" + createdAt +
                ", createdBy='" + createdBy + '\'' +
                '}';
    }
}
