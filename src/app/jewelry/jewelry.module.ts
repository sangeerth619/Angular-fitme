import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { VirtualTryOnComponent } from './virtual-try-on/virtual-try-on.component';
import { CustomizationToolComponent } from './customization-tool/customization-tool.component';
import { LiveChatComponent } from './live-chat/live-chat.component';
import { CareTipsComponent } from './care-tips/care-tips.component';
import { SizeGuideComponent } from './size-guide/size-guide.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { BlogComponent } from './blog/blog.component';
import { NewsletterSubscriptionComponent } from './newsletter-subscription/newsletter-subscription.component';
import { TrendsCarouselComponent } from './trends-carousel/trends-carousel.component';
import { StoreLocationsComponent } from './store-locations/store-locations.component';
import { TrendsInspirationsComponent } from './trends-inspirations/trends-inspirations.component';
import { FormsModule } from '@angular/forms';

// Define routes for this module if applicable
const jewelryRoutes: Routes = [
  { path: 'virtual-try-on', component: VirtualTryOnComponent },
  { path: 'customization-tool', component: CustomizationToolComponent },
  { path: 'live-chat', component: LiveChatComponent },
  { path: 'care-tips', component: CareTipsComponent },
  { path: 'size-guide', component: SizeGuideComponent },
  { path: 'wishlist', component: WishlistComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'newsletter-subscription', component: NewsletterSubscriptionComponent },
  { path: 'trends-carousel', component: TrendsCarouselComponent },
  { path: 'store-locations', component: StoreLocationsComponent },
  { path: 'trends-inspirations', component: TrendsInspirationsComponent },
];

@NgModule({
  declarations: [
    VirtualTryOnComponent,
    CustomizationToolComponent,
    LiveChatComponent,
    CareTipsComponent,
    SizeGuideComponent,
    WishlistComponent,
    BlogComponent,
    NewsletterSubscriptionComponent,
    TrendsCarouselComponent,
    StoreLocationsComponent,
    TrendsInspirationsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(jewelryRoutes), // Register the routes
  ],
})
export class JewelryModule {}
