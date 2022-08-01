package com.example.demo.entity;

import com.example.demo.Authority;
import lombok.*;
import javax.persistence.*;
import java.time.LocalDateTime;

@Getter
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Builder
public class UserEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // mysql의 AUTO_INCREMENT를 그대로 사용
    private Long id;

    @Enumerated(EnumType.STRING)
    private Authority authority;

    @Column(nullable = false)
    private String account;

    private String email;

    private String phoneNumber;

    @Column(nullable = false)
    private LocalDateTime createdAt;

    @Column(nullable = false)
    private String createdBy;

    private LocalDateTime updatedAt;

    private String updatedBy;
}

