package com.app.ironist.repository.memberRepository;

import com.app.ironist.domain.Member;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MemberRepository extends JpaRepository<Member, Long> {

}
