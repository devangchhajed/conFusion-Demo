import { Injectable } from '@angular/core';
import { LEADERS } from '../shared/leaders';
import { Leader } from '../shared/leader';

@Injectable({
  providedIn: 'root'
})
export class LeadersService {

  constructor() { }
  getLeaders(): Leader[] {
    return LEADERS;
  }

  getPromotion(id: string): Leader {
    return LEADERS.filter((lead) => (lead.id === id))[0];
  }

  getFeaturedPromotion(): Leader {
    return LEADERS.filter((leader) => leader.featured)[0];
  }
}
