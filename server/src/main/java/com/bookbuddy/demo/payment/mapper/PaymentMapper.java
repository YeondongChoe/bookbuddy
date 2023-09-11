package com.bookbuddy.demo.payment.mapper;

import com.bookbuddy.demo.payment.dto.PaymentDto;
import com.bookbuddy.demo.payment.entity.Payment;
import org.mapstruct.Mapper;
import org.mapstruct.MappingConstants;

import java.util.List;
import java.util.stream.Collectors;

@Mapper(componentModel = MappingConstants.ComponentModel.SPRING)
public interface PaymentMapper {
    default Payment paymentPostDtoToPayment(PaymentDto.Post paymentDto) {
        return new Payment(paymentDto.getShipName(),
                paymentDto.getAddress1(),
                paymentDto.getAddress2(),
                paymentDto.getShipMobile(),
                paymentDto.getShipTel(),
                paymentDto.getCstmrName(),
                paymentDto.getCstmrMobile(),
                paymentDto.getCstmrTel(),
                paymentDto.getEmail());
    }

    default PaymentDto.Response paymentToPaymentResponseDto(Payment payment) {
        List<Long> orders = payment.getOrders().stream()
                .map(e -> e.getId()).collect(Collectors.toList());
        return new PaymentDto.Response(
                payment.getId(),
                orders,
                payment.getShipName(),
                payment.getAddress1(),
                payment.getAddress2(),
                payment.getShipMobile(),
                payment.getShipTel(),
                payment.getCstmrName(),
                payment.getCstmrMobile(),
                payment.getCstmrTel(),
                payment.getEmail());
    }

    default List<PaymentDto.Response> paymentsToPaymentResponseDtos(List<Payment> payments) {
        return payments.stream().map(e-> {
            List<Long> orders = e.getOrders().stream()
                    .map(order -> order.getId()).collect(Collectors.toList());

            return new PaymentDto.Response(
                    e.getId(),
                    orders,
                    e.getShipName(),
                    e.getAddress1(),
                    e.getAddress2(),
                    e.getShipMobile(),
                    e.getShipTel(),
                    e.getCstmrName(),
                    e.getCstmrMobile(),
                    e.getCstmrTel(),
                    e.getEmail());
        }).collect(Collectors.toList());
    }
}
