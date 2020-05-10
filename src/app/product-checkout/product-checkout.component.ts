import { Component, OnInit } from "@angular/core";
import { Input } from "@angular/core";
import { FormBuilder } from '@angular/forms';

@Component({
  selector: "app-product-checkout",
  templateUrl: "./product-checkout.component.html",
  styleUrls: ["./product-checkout.component.css"]
})
export class ProductCheckoutComponent implements OnInit {
  @Input() product;
  constructor() {}
  ngOnInit() {}
}
