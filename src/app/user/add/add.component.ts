import { Component, OnInit, ViewContainerRef } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {User} from '../model/user-model';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-user-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class UserAddComponent implements OnInit {
  public userForm: FormGroup;
  public userInfo: User = new User();
  users: User[];
  selectedHero: User;
  public formErrors = {
    'nickName': '',
    'email': '',
    'password': '',
    'confirmPassword': '',
    'formError': ''
  };
  validationMessages = {
    'nickName': {
      'required': '昵称必须输入。',
      'minlength': '昵称2到32个字符。'
    },
    'email': {
      'required': '邮箱必须输入。',
      'pattern': '请输入正确的邮箱地址。'
    },
    'password': {
      'required': '密码必须输入。',
      'minlength': '密码至少要8位。'
    },
    'confirmPassword': {
      'required': '重复密码必须输入。',
      'minlength': '密码至少要8位。',
      'validateEqual': "两次输入的密码不一致。"
    }
  };
  constructor(public fb: FormBuilder,
              public userService: UserService,
              public router: Router,
              public route: ActivatedRoute,
              public vcr: ViewContainerRef
              ) {
  }
  ngOnInit() {
    this.buildForm();
  }
  private buildForm(): void {
    this.userForm = this.fb.group({
      "nickName": [
        this.userInfo.nickName,
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(32)
        ]
      ],
      "email": [
        this.userInfo.email,
        [
          Validators.required,
          Validators.pattern("^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$")
        ]
      ],
      "password": [
        this.userInfo.password,
        [
          Validators.required,
          Validators.minLength(8),
        ]
      ],
      "confirmPassword": [
        this.userInfo.confirmPassword,
        [
          Validators.required,
          Validators.minLength(8)
        ]
      ]
    });
    this.userForm.valueChanges
      .subscribe(data => this.onValueChanged(data));
    this.onValueChanged();
  }

  public onValueChanged(data?: any) {
    if (!this.userForm) {
      return;
    }
    const form = this.userForm;
    for (const field in this.formErrors) {
      this.formErrors[field] = '';
      const control = form.get(field);
      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }
  public doRegister() {
    console.log(this.userForm.valid);
    if (this.userForm.valid) {
      this.userInfo = this.userForm.value;
      this.userService.register(this.userInfo).then(user => {
        this.router.navigateByUrl("user/userList");
      });
    } else {
      this.formErrors.formError = "存在不合法的输入项，请检查。";
    }
    console.log(this.userInfo);
  }
}
