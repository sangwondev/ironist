package com.app.ironist.domain;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@NoArgsConstructor
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
