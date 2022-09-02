import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserFormComponent } from 'src/app/components/user-form/user-form.component';
import { QuestionComponent } from 'src/app/components/question/question.component';
import { UserService } from 'src/app/services/user.service';
import {
  userResponse,
  UserList,
  DeleteResponse,
} from 'src/app/interface/user-interface';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  public users!: UserList[];

  constructor(
    private modalService: NgbModal,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.getUsers();
  }

  editUser(user: any): void {
    const modalRef = this.modalService.open(UserFormComponent, { size: 'lg' });
    modalRef.componentInstance.data = user;
    modalRef.componentInstance.SubmitEvent.subscribe(() => {
      this.getUsers();
      this.closeModal();
    });
  }

  addUser(): void {
    const modalRef = this.modalService.open(UserFormComponent, { size: 'lg' });
    modalRef.componentInstance.SubmitEvent.subscribe(() => {
      this.getUsers();
      this.closeModal();
    });
  }

  deleteUser(user: any): void {
    const modalRef = this.modalService.open(QuestionComponent, { size: 'lg' });
    modalRef.componentInstance.newItemEvent.subscribe(
      async (res: boolean): Promise<void> => {
        if (res) {
          (await this.userService.deleteUser(user._id)).subscribe(
            (res: DeleteResponse) => {
              if (res.success) {
                this.getUsers();
                this.closeModal();
              }
            }
          );
        } else {
          this.closeModal();
        }
      }
    );
  }

  closeModal(): void {
    this.modalService.dismissAll(false);
  }

  async getUsers(): Promise<void> {
    (await this.userService.getUsers()).subscribe((res: userResponse): void => {
      this.users = res.data;
    });
  }
}
