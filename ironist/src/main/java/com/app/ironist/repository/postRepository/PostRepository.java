package com.app.ironist.repository.postRepository;

import com.app.ironist.domain.Post;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PostRepository extends JpaRepository<Post, Long> {
}
