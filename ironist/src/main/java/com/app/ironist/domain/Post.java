package com.app.ironist.domain;

import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
public class Post {

    @Id @GeneratedValue
    private Long id;
    private String title;
    private String content;
    private Boolean isPublic;
    private LocalDateTime createdDatetime;

    @ManyToOne
    @JoinColumn(name = "member_id")
    private Member member;
}
