package com.igrowker.nativo.dtos.donation;

import jakarta.validation.constraints.DecimalMin;
import jakarta.validation.constraints.NotNull;

import java.math.BigDecimal;


public record RequestDonationDto(
        @NotNull(message = "El Monto de la donacion es nulo.")
        @DecimalMin(value = "100.00", message = "El monto tiene que tener un mínimo de $100")
        BigDecimal amount,

        @NotNull(message = "La cuenta del beneficiario de la donacion es nulo.")
        Long numberAccountBeneficiary,

        @NotNull(message = "El estado de la opcion de anonimato es nulo")
        Boolean anonymousDonation
) {}
