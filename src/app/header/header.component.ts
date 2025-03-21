import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  isFeaturesOpen = false;
  isCompanyOpen = false;
  isMobileMenuOpen = false;

  toggleFeatures() {
    this.isFeaturesOpen = !this.isFeaturesOpen;
    if (this.isFeaturesOpen) this.isCompanyOpen = false; // Fecha o outro dropdown
  }

  toggleCompany() {
    this.isCompanyOpen = !this.isCompanyOpen;
    if (this.isCompanyOpen) this.isFeaturesOpen = false; // Fecha o outro dropdown
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  // Adicionando acessibilidade
  get ariaExpandedFeatures(): string {
    return this.isFeaturesOpen ? 'true' : 'false';
  }

  get ariaExpandedCompany(): string {
    return this.isCompanyOpen ? 'true' : 'false';
  }

  get ariaExpandedMobileMenu(): string {
    return this.isMobileMenuOpen ? 'true' : 'false';
  }
}
