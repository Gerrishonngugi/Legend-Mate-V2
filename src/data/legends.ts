export interface Legend {
  id: string;
  name: string;
  role: 'Assault' | 'Skirmisher' | 'Recon' | 'Controller' | 'Support';
  personality: string[];
  playstyle: string[];
  difficulty: 1 | 2 | 3;
  abilities: {
    passive: string;
    tactical: string;
    ultimate: string;
  };
  image: string;
}

export const legends: Legend[] = [
  {
    id: 'wraith',
    name: 'Wraith',
    role: 'Skirmisher',
    personality: ['Independent', 'Aggressive', 'Strategic'],
    playstyle: ['Aggressive', 'Elusive', 'Quick'],
    difficulty: 2,
    abilities: {
      passive: 'Voices from the Void - Warns of danger when aimed at',
      tactical: 'Into the Void - Become invulnerable and invisible',
      ultimate: 'Dimensional Rift - Create two linked portals'
    },
    image: 'https://images.unsplash.com/photo-1635322966219-b75ed372eb01?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'bloodhound',
    name: 'Bloodhound',
    role: 'Recon',
    personality: ['Tactical', 'Team Player', 'Strategic'],
    playstyle: ['Tracking', 'Team-oriented', 'Aggressive'],
    difficulty: 1,
    abilities: {
      passive: 'Tracker - See enemy tracks',
      tactical: 'Eye of the Allfather - Reveal hidden enemies',
      ultimate: 'Beast of the Hunt - Enhanced speed and vision'
    },
    image: 'https://images.unsplash.com/photo-1635322972164-d0594e0167c8?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'lifeline',
    name: 'Lifeline',
    role: 'Support',
    personality: ['Support-oriented', 'Team Player', 'Defensive'],
    playstyle: ['Supportive', 'Team Healer', 'Resource Management'],
    difficulty: 1,
    abilities: {
      passive: 'Combat Revive - Deploy D.O.C. to revive teammates',
      tactical: 'D.O.C. Heal Drone - Heal nearby teammates',
      ultimate: 'Care Package - Call down a package of high-quality gear'
    },
    image: 'https://images.unsplash.com/photo-1635323300733-4952d95f0ea9?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'pathfinder',
    name: 'Pathfinder',
    role: 'Skirmisher',
    personality: ['Aggressive', 'Solo', 'Risk-taker'],
    playstyle: ['Mobile', 'Vertical', 'Flanking'],
    difficulty: 2,
    abilities: {
      passive: 'Insider Knowledge - Scan survey beacons',
      tactical: 'Grappling Hook - Quickly reach locations',
      ultimate: 'Zipline Gun - Create a zipline for team'
    },
    image: 'https://images.unsplash.com/photo-1635322657566-c5dd0cb268ee?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'bangalore',
    name: 'Bangalore',
    role: 'Assault',
    personality: ['Tactical', 'Strategic', 'Team Player'],
    playstyle: ['Aggressive', 'Smoke Control', 'Combat Expert'],
    difficulty: 1,
    abilities: {
      passive: 'Double Time - Speed boost when shot at',
      tactical: 'Smoke Launcher - Launch smoke canisters',
      ultimate: 'Rolling Thunder - Call an artillery strike'
    },
    image: 'https://images.unsplash.com/photo-1635322677011-83c0175120be?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'gibraltar',
    name: 'Gibraltar',
    role: 'Controller',
    personality: ['Defensive', 'Team Player', 'Support-oriented'],
    playstyle: ['Protective', 'Area Control', 'Tank'],
    difficulty: 1,
    abilities: {
      passive: 'Gun Shield - ADS shield protection',
      tactical: 'Dome of Protection - Deploy protective dome',
      ultimate: 'Defensive Bombardment - Call mortar strike'
    },
    image: 'https://images.unsplash.com/photo-1635322677824-699e1f0a7d85?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'octane',
    name: 'Octane',
    role: 'Skirmisher',
    personality: ['Aggressive', 'Risk-taker', 'Solo'],
    playstyle: ['Speed', 'High Mobility', 'Flanking'],
    difficulty: 1,
    abilities: {
      passive: 'Swift Mend - Automatically heal over time',
      tactical: 'Stim - Move faster for a cost of health',
      ultimate: 'Launch Pad - Deploy jump pad for team'
    },
    image: 'https://images.unsplash.com/photo-1635322678023-7ebac802c508?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'valkyrie',
    name: 'Valkyrie',
    role: 'Skirmisher',
    personality: ['Aggressive', 'Strategic', 'Solo'],
    playstyle: ['Aerial Combat', 'Repositioning', 'Team Mobility'],
    difficulty: 2,
    abilities: {
      passive: 'VTOL Jets - Hover and fly',
      tactical: 'Missile Swarm - Fire cluster missiles',
      ultimate: 'Skyward Dive - Launch team into the air'
    },
    image: 'https://images.unsplash.com/photo-1635322678280-05ab2a004c83?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'horizon',
    name: 'Horizon',
    role: 'Skirmisher',
    personality: ['Strategic', 'Solo', 'Risk-taker'],
    playstyle: ['Vertical Mobility', 'Area Control', 'Scientific'],
    difficulty: 2,
    abilities: {
      passive: 'Spacewalk - Better air control and soft landings',
      tactical: 'Gravity Lift - Create vertical boost',
      ultimate: 'Black Hole - Deploy N.E.W.T to create a black hole'
    },
    image: 'https://images.unsplash.com/photo-1635322678487-d42c3a372781?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'caustic',
    name: 'Caustic',
    role: 'Controller',
    personality: ['Defensive', 'Strategic', 'Solo'],
    playstyle: ['Area Denial', 'Defensive', 'Trap Setting'],
    difficulty: 2,
    abilities: {
      passive: 'Nox Vision - See enemies in gas',
      tactical: 'Nox Gas Trap - Place gas traps',
      ultimate: 'Nox Gas Grenade - Throw gas grenade'
    },
    image: 'https://images.unsplash.com/photo-1635322678681-3b743fdb3a3f?auto=format&fit=crop&q=80&w=600'
  }
];

export const personalityTraits = [
  'Aggressive',
  'Cautious',
  'Strategic',
  'Support-oriented',
  'Solo',
  'Team Player',
  'Risk-taker',
  'Defensive',
  'Tactical'
];