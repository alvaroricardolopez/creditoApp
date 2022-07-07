import { Component, Input, OnInit } from '@angular/core';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FileUploadService } from 'src/app/services/file-upload.service';

@Component({
	selector: 'app-file-upload',
	templateUrl: './file-upload.component.html',
	styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {
	@Input()
	typeFile = '*';

	dataImage: any;
	selectedFiles?: FileList;
	currentFile?: File;
	progress = 0;
	message = '';
	fileInfos?: Observable<any>;
	constructor(private uploadService: FileUploadService) {}

	ngOnInit(): void {
		this.fileInfos = this.uploadService.getFiles();
	}

	selectFile(event: any): void {
		this.selectedFiles = event.target.files;

		const reader = new FileReader();
		reader.onload = (e: any) => {
			const image = new Image();
			image.src = e.target.result;
			image.onload = (rs) => {
				const imgBase64Path = e.target.result;
				console.log(imgBase64Path);
				this.dataImage = imgBase64Path;
			};
		};
		reader.readAsDataURL(event.target.files[0]);
	}
	upload(): void {
		this.progress = 0;
		if (this.selectedFiles) {
			const file: File | null = this.selectedFiles.item(0);
			if (file) {
				this.currentFile = file;
				this.uploadService.upload(this.currentFile).subscribe({
					next: (event: any) => {
						if (event.type === HttpEventType.UploadProgress) {
							this.progress = Math.round(
								(100 * event.loaded) / event.total
							);
						} else if (event instanceof HttpResponse) {
							this.message = event.body.message;
							this.fileInfos = this.uploadService.getFiles();
						}
					},
					error: (err: any) => {
						console.log(err);
						this.progress = 0;
						if (err.error && err.error.message) {
							this.message = err.error.message;
						} else {
							this.message = 'Could not upload the file!';
						}
						this.currentFile = undefined;
					}
				});
			}
			this.selectedFiles = undefined;
		}
	}
}
