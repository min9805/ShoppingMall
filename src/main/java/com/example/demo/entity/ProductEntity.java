package com.example.demo.entity;

import lombok.*;
import javax.persistence.*;
import java.time.LocalDateTime;

@Getter
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Builder
public class ProductEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // mysql의 AUTO_INCREMENT를 그대로 사용
    private Long id;

    @Column(nullable = false)
    private String prodName;

    private String imgName;
    private String imgPath;
    private String content;

    @Column(nullable = false)
    private Long price;

    @Column(nullable = false)
    private LocalDateTime createdAt;

    @Column(nullable = false)
    private String createdBy;

}


