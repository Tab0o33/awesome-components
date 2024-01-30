import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Comment } from '../../../core/models/comment.model'
import { FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-comments',
    templateUrl: './comments.component.html',
    styleUrls: ['./comments.component.scss']
})
export class CommentsComponent {

    @Input() comments!: Comment[];
    @Output() newComment = new EventEmitter<string>();

    commentCtrl!: FormControl;

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit(): void {
        this.commentCtrl = this.formBuilder.control('', [Validators.required, Validators.minLength(10)]);
    }

    onLeaveComment() {
        if (this.commentCtrl.invalid) {
            return;
        }
        this.newComment.emit(this.commentCtrl.value);
        this.commentCtrl.reset();
    }

}
