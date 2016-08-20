import {Component, OnInit} from "@angular/core";

@Component({
    selector: "addMember",
    templateUrl: "./app/addMember.html"
})
export class AddMemberComponent implements OnInit {
    ngOnInit() {
        console.log("AddMemberComponent component initialized ...");
    }

    goBack(): void {
  window.history.back();
}
}
