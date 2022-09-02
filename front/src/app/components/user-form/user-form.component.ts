import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { userResponse } from 'src/app/interface/user-interface';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent implements OnInit {
  @Input() data: any;
  @Output() SubmitEvent = new EventEmitter();

  constructor(private userService: UserService, private fb: FormBuilder) {}
  ngOnInit(): void {
    this.addDefaultValue(this.data);
    console.log(this.data);
  }

  userForm = this.fb.group({
    name: ['', Validators.required],
    surname: ['', Validators.required],
  });

  addDefaultValue(arg: any): void {
    this.userForm.patchValue({
      name: arg.name,
      surname: arg.surname,
    });
  }

  async onSubmit(): Promise<void> {
    const { name, surname } = this.userForm.value;
    if (this.data) {
      (
        await this.userService.editUser(
          { name: name ?? '', surname: surname ?? '' },
          this.data._id
        )
      ).subscribe((res: userResponse) => {
        if (res) {
          this.SubmitEvent.emit();
        }
      });
    } else {
      (
        await this.userService.addUser({
          name: name ?? '',
          surname: surname ?? '',
        })
      ).subscribe((res: userResponse) => {
        if (res) {
          this.SubmitEvent.emit();
        }
      });
    }
  }
}
