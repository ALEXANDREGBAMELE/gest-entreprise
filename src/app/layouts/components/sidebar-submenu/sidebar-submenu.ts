import { CommonModule } from "@angular/common";
import { EventEmitter, Input, Output, Component } from "@angular/core";
import { RouterLink, RouterLinkActive } from "@angular/router";
import { IMenuItem } from "../../menu";

@Component({
  selector: 'app-sidebar-submenu',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './sidebar-submenu.html',
})
export class SidebarSubmenu {
  @Input() items: IMenuItem[] = [];
  @Input() collapsed = false;
  @Input() parentOpen = false;
  @Output() navigate = new EventEmitter<void>();
 


ngOnInit() {
  this.items.forEach(item => {
    if (item.open === undefined) item.open = false;
    this.initChildren(item);
  });
}

initChildren(item: IMenuItem) {
  if (!item.children) return;
  item.children.forEach(child => {
    if (child.open === undefined) child.open = false;
    this.initChildren(child);
  });
}

closeChildren(item: IMenuItem) {
  if (!item.children) return;

  item.children.forEach(child => {
    child.open = false;
    this.closeChildren(child);
  });
}

toggle(item: IMenuItem) {
  if (item.open) {
    // Si ouvert → on ferme et tous les enfants
    item.open = false;
    this.closeChildren(item);
  } else {
    // Si fermé → on ouvre seulement cet item
    item.open = true;
  }
}
}
