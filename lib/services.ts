import {
  Plane, BedDouble, CalendarDays, UtensilsCrossed, Ticket, Car, Users, RefreshCw,
} from 'lucide-react';

// The 8 trip categories shared by Home (short) and Product (long)
export const SERVICES = [
  {
    icon: Plane,
    label: 'Flight Options',
    desc: 'We compare routes, times and fares so you can pick the flight that fits.',
    long: 'Tell your assistant where and when you want to go. We compare routes, departure times and fares across airlines and send you a short list of options to review, so you can choose the flight that fits your schedule.',
  },
  {
    icon: BedDouble,
    label: 'Hotels & Stays',
    desc: 'Hotel and vacation-rental options matched to your budget and location.',
    long: 'Share your budget, preferred neighborhood and must-haves. We look at hotels and vacation rentals, line up the best matches, and book the stay you approve.',
  },
  {
    icon: CalendarDays,
    label: 'Itineraries',
    desc: 'Day-by-day plans with addresses, times and confirmations in one place.',
    long: 'Your assistant pulls everything into one day-by-day itinerary, with addresses, times and confirmation details, so your whole trip is easy to find in your portal.',
  },
  {
    icon: UtensilsCrossed,
    label: 'Dining Reservations',
    desc: 'Restaurant reservations near where you\u2019re staying.',
    long: 'Tell us what you like to eat and when. We find restaurants near your hotel or your plans for the day and make the reservation you choose.',
  },
  {
    icon: Ticket,
    label: 'Activities & Tours',
    desc: 'Tours, attractions and experiences booked around your schedule.',
    long: 'From guided tours to attractions and local experiences, we find options that fit your interests and your schedule, then book the ones you approve.',
  },
  {
    icon: Car,
    label: 'Ground Transportation',
    desc: 'Rental cars, airport transfers and rides lined up in advance.',
    long: 'Rental cars, airport transfers and rides are lined up before you leave, so you know how you are getting from the airport to your hotel and around town.',
  },
  {
    icon: Users,
    label: 'Group & Family Trips',
    desc: 'Shared plans for everyone traveling with you.',
    long: 'Traveling with family or friends? Your assistant builds one shared plan you can send to everyone on the trip, so everybody sees the same dates, stays and schedule.',
  },
  {
    icon: RefreshCw,
    label: 'Day-of Changes',
    desc: 'Delays or new plans? Your assistant helps you adjust.',
    long: 'Flights run late and plans change. On the day of travel, your assistant sends reminders and helps you adjust your itinerary so you can keep moving.',
  },
];
