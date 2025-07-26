package com.app.ironist.controller;

import com.app.ironist.domain.Post;
import com.app.ironist.service.PostService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/posts")
public class PostController {

    private final PostService postService;

    public PostController(PostService postService) { this.postService = postService; }

    @PostMapping
    public Post createPost(@RequestBody Post post) { return postService.createPost(post); }

    @GetMapping
    public List<Post> getAllPosts(Post post) { return postService.getAllPosts(); }

    @GetMapping("/{id}")
    public Post getPostById(@PathVariable Long id) { return postService.getPostById(id); }

    @PutMapping("/{id}")
    public Post updatePost(@PathVariable Long id, Post updatedPost) {
        return postService.updatePost(id, updatedPost);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity deletePost(@PathVariable Long id) { return postService.deletePost(id); }

}
