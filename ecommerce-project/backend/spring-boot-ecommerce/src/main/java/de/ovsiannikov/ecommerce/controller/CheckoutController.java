package de.ovsiannikov.ecommerce.controller;

import de.ovsiannikov.ecommerce.dto.Purchase;
import de.ovsiannikov.ecommerce.dto.PurchaseResponse;
import de.ovsiannikov.ecommerce.service.CheckoutService;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/api/checkout")
public class CheckoutController {

    private CheckoutService checkoutService;

    public CheckoutController(CheckoutService checkoutService) {
        this.checkoutService = checkoutService;
    }

    @PostMapping("/purchase")
    public PurchaseResponse placeOrder(@RequestBody Purchase purchase) {

        return checkoutService.placeOrder(purchase);
    }
}
