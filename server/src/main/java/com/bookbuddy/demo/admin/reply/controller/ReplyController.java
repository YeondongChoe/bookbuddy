package com.bookbuddy.demo.admin.reply.controller;

import com.bookbuddy.demo.admin.reply.dto.ReplyDto;
import com.bookbuddy.demo.admin.reply.entity.Reply;
import com.bookbuddy.demo.admin.reply.mapper.ReplyMapper;
import com.bookbuddy.demo.admin.reply.service.ReplyService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.Optional;

@RestController
@RequestMapping("/admin/cs")
@RequiredArgsConstructor
public class ReplyController {
    private final ReplyService replyService;
    private final ReplyMapper mapper;
    @PostMapping
    public ResponseEntity createReply(@RequestBody @Valid ReplyDto.Post replyDto) {
        replyService.verifyReply(replyDto.getBoardId());
        Reply reply = replyService.createReply(mapper.replyPostDtoToReply(replyDto), replyDto);

        return new ResponseEntity(mapper.replyToReplyResponseDto(reply), HttpStatus.CREATED);
    }
    @GetMapping("/{board-id}")
    public ResponseEntity getReply(@PathVariable("board-id") @Positive long boardId) {
        Optional<Reply> reply = replyService.findReplyByBoardId(boardId);
        if(! reply.isPresent()) {
            return new ResponseEntity(HttpStatus.NO_CONTENT);
        }

        return new ResponseEntity(mapper.replyToReplyResponseDto(reply.get()), HttpStatus.OK);
    }
}
