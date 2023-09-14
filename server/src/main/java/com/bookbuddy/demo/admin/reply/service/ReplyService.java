package com.bookbuddy.demo.admin.reply.service;

import com.bookbuddy.demo.admin.reply.dto.ReplyDto;
import com.bookbuddy.demo.admin.reply.entity.Reply;
import com.bookbuddy.demo.admin.reply.mapper.ReplyMapper;
import com.bookbuddy.demo.admin.reply.repository.ReplyRepository;
import com.bookbuddy.demo.board.entity.Board;
import com.bookbuddy.demo.board.service.BoardService;
import com.bookbuddy.demo.global.exception.BusinessException;
import com.bookbuddy.demo.global.exception.ExceptionCode;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Slf4j
@Service
@RequiredArgsConstructor
public class ReplyService {
    private final ReplyMapper mapper;
    private final ReplyRepository replyRepository;
    private final BoardService boardService;
    public Reply createReply(Reply reply, ReplyDto.Post replyDto) {
        Board board = boardService.findBoard(replyDto.getBoardId());
        reply.addBoard(board);

        Reply savedReply = replyRepository.save(reply);
        boardService.updateBoardStatus(replyDto.getBoardId());

        return savedReply;
    }

    public Optional<Reply> findReplyByBoardId(long boardId) {
        return replyRepository.findByBoardId(boardId);
    }

    public void verifyReply(long boardId) {
        Optional<Reply> reply = replyRepository.findByBoardId(boardId);
        if(reply.isPresent()) {
            reply.ifPresent(e->new BusinessException(ExceptionCode.REPLY_EXISTS));
        }
    }
}
