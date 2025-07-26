package com.app.ironist.service;

import com.app.ironist.domain.Post;
import com.app.ironist.repository.postRepository.PostRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class PostService {

    private final PostRepository postRepository;

    public PostService(PostRepository postRepository) { this.postRepository = postRepository; }

    public Post createPost(Post post) {
        post.setCreatedDatetime(LocalDateTime.now());
        return postRepository.save(post);
    }

    public List<Post> getAllPosts() {
        return postRepository.findAll();
    }

    public Post getPostById(Long id) {
        return postRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("No Post Found"));
    }

    public Post updatePost(Long id, Post updatedPost) {
        Post post = getPostById(id);
        post.setTitle(updatedPost.getTitle());
        post.setContent(updatedPost.getContent());
        post.setIsPublic(updatedPost.getIsPublic());
        return postRepository.save(post);
    }

    public ResponseEntity deletePost(Long id) {
        postRepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }

}
