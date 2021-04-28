import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/_services/product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  categories: any[];
  product: any = {};
  image: string;
  files: any[] = [];
  formData: FormData = new FormData();
  productId: any;

  constructor(private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.productService.getCategories().subscribe((categories: any) => {
      this.categories = categories;
      console.log(this.categories);
    })

    this.productId = this.route.snapshot.paramMap.get('id');
    if (this.productId != null) {
      this.productService.getProductById(this.productId).subscribe((product: any) => {
        this.product = product;
        console.log(this.product);
      })

    }
  }

  onCategoryChange() {
    let categoryType = this.categories.find(m => m.id == parseInt(this.product.productCategoryId)).productCategoryName;
    this.product.type = categoryType;
    this.product.productCategoryId = parseInt(this.product.productCategoryId);
  }

  prepareImageFilesList(files: Array<any>) {
    for (const item of files) {
      const reader = new FileReader();
      reader.onload = (event: any) => {
        this.image = event.target.result;
        this.files = [];
        this.files.push({ 'image': this.image, 'fileName': item.name });

      };
      reader.readAsDataURL(item);
    }
    for (let i = 0; i < files.length; i++) {
      if (i == 0) {
        this.product.productImage = files[i];
      }
    }
    // this.productService.uploadImage(this.files[0]).subscribe(response => {
    //   this.product.imagePath = response;
    // })

  }

  deleteFile(index: number) {
    this.files.splice(index, 1);
  }

  submit() {
    this.formData.append('Name', this.product.name);
    this.formData.append('Description', this.product.description);
    this.formData.append('Type', this.product.type);
    this.formData.append('Expiry', this.product.expiry);
    this.formData.append('Date', this.product.date);
    this.formData.append('Price', this.product.price);
    this.formData.append('LastUpdatedBy', this.product.lastUpdatedBy);
    this.formData.append('ProductCategoryId', this.product.productCategoryId);
    this.formData.append('ProductImage', this.product.productImage);

    this.productService.createProduct(this.formData).subscribe(response => {
      console.log(response);
    })
  }

  deleteProduct() {
    if (confirm("Are you sure?")) {
      this.productService.deleteProduct(this.productId).subscribe(x => {
        this.router.navigate(['/products']);
      });
    }
  }

  updateProduct() {

    this.productService.updateProduct(this.productId).subscribe(x => {
      this.router.navigate(['/products']);
    });

  }
}
