package com.app.ironist.service;

import com.app.ironist.domain.Member;
import com.app.ironist.repository.memberRepository.MemberRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MemberService {

    private final MemberRepository memberRepository;

    public MemberService(MemberRepository memberRepository) {
        this.memberRepository = memberRepository;
    }

    public Member createMember(Member member) {
        return memberRepository.save(member);
    }

    public List<Member> getAllMembers() {
        return memberRepository.findAll();
    }

    public Member getMemberById(Long id) {
        return memberRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Member not found"));
    }

    public Member updateMember(Long id, Member updatedMember) {
        Member member = getMemberById(id);
        member.setEmail(updatedMember.getEmail());
        member.setPassword(updatedMember.getPassword());
        member.setNickname(updatedMember.getNickname());
        return memberRepository.save(member);
    }

    public ResponseEntity deleteMember(Long id) {
        memberRepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
