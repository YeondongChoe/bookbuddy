package com.bookbuddy.demo.board.service;

import com.bookbuddy.demo.board.entity.Board;
import com.bookbuddy.demo.board.repository.BoardRepository;
import com.bookbuddy.demo.global.exception.BusinessException;
import com.bookbuddy.demo.global.exception.ExceptionCode;
import com.bookbuddy.demo.member.entity.Member;
import com.bookbuddy.demo.member.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class BoardService {
    private final MemberService memberService;
    private final BoardRepository boardRepository;
    public Board createBoard(Board board, String email) {
        Member member = memberService.findMember(email);
        member.addBoard(board);
        board.addMember(member);

        return boardRepository.save(board);
    }

    public Board findBoard(long boardId) {
        return findVerifyBoard(boardId);
    }

    private Board findVerifyBoard(long boardId) {
        Optional<Board> board = boardRepository.findById(boardId);
        return board.orElseThrow(() ->
                new BusinessException(ExceptionCode.BOARD_NOT_FOUND));
    }

    public Board updateBoard(Board board) {
        Board findBoard = findVerifyBoard(board.getId());

        Optional.ofNullable(board.getTitle())
                .ifPresent(title->findBoard.setTitle(title));
        Optional.ofNullable(board.getContent())
                .ifPresent(content->findBoard.setContent(content));

        return boardRepository.save(findBoard);
    }
}
