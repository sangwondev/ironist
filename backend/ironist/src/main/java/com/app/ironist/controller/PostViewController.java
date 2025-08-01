package com.app.ironist.controller;

import com.app.ironist.domain.Post;
import com.app.ironist.repository.postRepository.PostRepository;
import com.app.ironist.service.PostService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/posts")
public class PostViewController {

    private final PostService postService;

    public PostViewController(PostService postService) { this.postService = postService; }

    // 초기 화면, 텍스트 입력창, 제출 버튼
    @GetMapping
    public String showPostingView(Model model) {
        model.addAttribute("post", new Post());
        return "defaultPostView";
    }

    @PostMapping
    public String createPost(@ModelAttribute Post post) {
        postService.createPost(post);
        return "redirect:/posts";
    }

    @GetMapping("/list")
    public String showAllPosts(Model model) {
        model.addAttribute("posts", postService.getAllPosts());
        return "postListView";
    }
}
