package com.app.ironist.domain;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;

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
    private User user;
}
