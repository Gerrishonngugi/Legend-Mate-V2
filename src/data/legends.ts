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
    image: 'https://media.contentapi.ea.com/content/dam/apex-legends/common/legends/apex-section-bg-legends-wraith-xl.jpg.adapt.320w.jpg'
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
    image: 'https://images.saymedia-content.com/.image/t_share/MTg5NDUyNTE0NDIzNDgxNjA2/bloodhound-personality.jpg'
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
    image: 'https://media.contentapi.ea.com/content/dam/apex-legends/common/legends/apex-grid-tile-legends-lifeline.png.adapt.crop16x9.1023w.png'
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
    image: 'https://i.pinimg.com/736x/ff/d3/f3/ffd3f321b4526b138ee2f9818c66a21a.jpg'
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
    image: 'https://preview.redd.it/lrz7xnjprh231.png?width=640&crop=smart&auto=webp&s=763eed9b39ae44389cc25c8bab928a7b5850d452'
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
    image: 'https://media.contentapi.ea.com/content/dam/apex-legends/common/legends/apex-section-bg-legends-gibraltar-xl.jpg.adapt.320w.jpg'
  },

   {
    id: 'mirage',
    name: 'Mirage',
    role: 'Support',
    personality: ['Charismatic', 'Humorous', 'Confident', 'Entertaining'],
    playstyle: ['Deception', 'Confusion', 'Misdirection'],
    difficulty: 3,
    abilities: {
      passive: 'Now You See Me - Cloak when reviving/respawning',
      tactical: 'Psyche Out - Deploy decoy',
      ultimate: 'Life of the Party - Deploy multiple decoys'
    },
    image: 'https://media.contentapi.ea.com/content/dam/apex-legends/common/legends/apex-section-bg-legends-mirage-xl.jpg.adapt.320w.jpg'
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
    image: 'https://wallpapers.com/images/high/cool-apex-legends-1920-x-1080-vtld87zag2fjm1sh.webp'
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
    image: 'https://assetsio.gnwcdn.com/apex-legends-reveals-new-legend-valkyrie-1618848887280.jpg?width=1200&height=900&fit=crop&quality=100&format=png&enable=upscale&auto=webp'
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
    image: 'https://media.contentapi.ea.com/content/dam/apex-legends/common/legends/apex-section-bg-legends-horizon-xl.jpg.adapt.320w.jpg'
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
    image: 'https://i.ebayimg.com/images/g/jP0AAOSw5JZjDcCK/s-l1200.jpg'
  },
  {
    id: 'wattson',
    name: 'Wattson',
    role: 'Controller',
    personality: ['Intelligent', 'Quirky', 'Defensive', 'Technical'],
    playstyle: ['Area Control', 'Defense', 'Shield Management'],
    difficulty: 3,
    abilities: {
      passive: 'Spark of Genius - Ultimate Accelerant bonus',
      tactical: 'Perimeter Security - Electric fences',
      ultimate: 'Interception Pylon - Shield restore and ordnance defense'
    },
    image: "https://cdnb.artstation.com/p/assets/images/images/019/555/159/large/sam-sun-wattson-render-1pose-v0001.jpg?1564001412"
  },
  {
    id: 'crypto',
    name: 'Crypto',
    role: 'Recon',
    personality: ['Cautious', 'Calculating', 'Secretive', 'Technical'],
    playstyle: ['Information Gathering', 'Support', 'Strategic'],
    difficulty: 3,
    abilities: {
      passive: 'Neurolink - Share drone view with team',
      tactical: 'Surveillance Drone - Deploy drone',
      ultimate: 'Drone EMP - Shield/trap damage'
    },
    image: "https://media.contentapi.ea.com/content/dam/apex-legends/common/legends/apex-section-bg-legends-crypto-xl.jpg.adapt.320w.jpg"
  },
  {
    id: 'revenant',
    name: 'Revenant',
    role: 'Assault',
    personality: ['Vengeful', 'Aggressive', 'Dark', 'Intimidating'],
    playstyle: ['Aggressive', 'Stealth', 'Flanking'],
    difficulty: 2,
    abilities: {
      passive: 'Stalker - Faster crouch movement',
      tactical: 'Silence - Disable enemy abilities',
      ultimate: 'Death Totem - Temporary death protection'
    },
    image: 'https://www.digitaltrends.com/wp-content/uploads/2020/11/apex-legends-revenant-guide-featured.jpg?p=1'
  },
  {
    id: 'loba',
    name: 'Loba',
    role: 'Support',
    personality: ['Confident', 'Independent', 'Resourceful', 'Determined'],
    playstyle: ['Loot-focused', 'Mobility', 'Support'],
    difficulty: 2,
    abilities: {
      passive: 'Eye for Quality - See high-tier loot through walls',
      tactical: 'Burglar\'s Best Friend - Teleport bracelet',
      ultimate: 'Black Market Boutique - Loot from distance'
    },
    image: 'https://media.contentapi.ea.com/content/dam/apex-legends/common/legends/apex-section-bg-legends-loba-xl.jpg.adapt.320w.jpg'
  },
  {
    id: 'rampart',
    name: 'Rampart',
    role: 'Controller',
    personality: ['Confident', 'Energetic', 'Creative', 'Competitive'],
    playstyle: ['Defensive', 'Area Control', 'LMG Specialist'],
    difficulty: 3,
    abilities: {
      passive: 'Modded Loader - LMG capacity and reload boost',
      tactical: 'Amped Cover - Deployable cover',
      ultimate: 'Mobile Minigun "Sheila" - Mounted turret'
    },
    image : 'https://i.pinimg.com/originals/43/94/09/43940907c1c6c82d1573d6375de87a94.jpg'
  },
  {
    id: 'fuse',
    name: 'Fuse',
    role: 'Assault',
    personality: ['Chaotic', 'Explosive', 'Loud', 'Fun-loving'],
    playstyle: ['Explosive Damage', 'Area Denial', 'Aggressive'],
    difficulty: 1,
    abilities: {
      passive: 'Grenadier - Stack grenades, throw further',
      tactical: 'Knuckle Cluster - Cluster bomb',
      ultimate: 'The Motherlode - Ring of fire'
    },
    image: 'https://gamingbolt.com/wp-content/uploads/2021/01/Apex-Legends-Fuse.jpg'
  },
  {
    id: 'seer',
    name: 'Seer',
    role: 'Recon',
    personality: ['Artistic', 'Graceful', 'Focused', 'Mysterious'],
    playstyle: ['Information Gathering', 'Tracking', 'Precision'],
    difficulty: 2,
    abilities: {
      passive: 'Heart Seeker - Detect heartbeats while ADS',
      tactical: 'Focus of Attention - Reveal and interrupt enemies',
      ultimate: 'Exhibit - Create sphere of detection'
    },
    image: 'https://media.contentapi.ea.com/content/dam/apex-legends/common/legends/seer/apex-section-bg-legends-seer-l.jpg.adapt.320w.jpg'
  },
  {
    id: 'ash',
    name: 'Ash',
    role: 'Assault',
    personality: ['Cold', 'Calculating', 'Ruthless', 'Professional'],
    playstyle: ['Aggressive', 'Tracking', 'Mobility'],
    difficulty: 2,
    abilities: {
      passive: 'Marked for Death - Mark recent deathboxes',
      tactical: 'Arc Snare - Tether enemies',
      ultimate: 'Phase Breach - One-way portal'
    },
    image: 'https://media.contentapi.ea.com/content/dam/apex-legends/common/legends/ash/apex-section-bg-legends-ash-xl.jpg.adapt.320w.jpg'
  },
  {
    id: 'madmaggie',
    name: 'Mad Maggie',
    role: 'Assault',
    personality: ['Aggressive', 'Rebellious', 'Fierce', 'Vengeful'],
    playstyle: ['Aggressive', 'Pursuit', 'Breaching'],
    difficulty: 2,
    abilities: {
      passive: 'Warlord\'s Ire - Highlight damaged enemies',
      tactical: 'Riot Drill - Burn through obstacles',
      ultimate: 'Wrecking Ball - Bouncing speed boost ball'
    },
    image: 'https://miro.medium.com/v2/resize:fit:1400/0*0D0cmr810-i_R7-F.jpeg'
  },
  {
    id: 'newcastle',
    name: 'Newcastle',
    role: 'Controller',
    personality: ['Protective', 'Heroic', 'Leadership', 'Determined'],
    playstyle: ['Defensive', 'Team Protection', 'Mobile Defense'],
    difficulty: 2,
    abilities: {
      passive: 'Retrieve the Wounded - Drag and shield downed allies',
      tactical: 'Mobile Shield - Deployable energy shield',
      ultimate: 'Castle Wall - Leap and create fortress'
    },
    image:'https://dguljqwnrjejm.cloudfront.net/images/8be4ac08-d272-48d6-8c.width-1000.bgcolor-000.format-jpeg.jpg'
  },
  {
    id: 'vantage',
    name: 'Vantage',
    role: 'Recon',
    personality: ['Survivalist', 'Resourceful', 'Analytical', 'Determined'],
    playstyle: ['Long-range Combat', 'Reconnaissance', 'Mobility'],
    difficulty: 2,
    abilities: {
      passive: 'Spotter\'s Lens - Information on targeted enemies',
      tactical: 'Echo Relocation - Position swap with companion',
      ultimate: 'Sniper\'s Mark - Custom sniper rifle'
    },
    image: 'https://media.contentapi.ea.com/content/dam/apex-legends/common/hunted/vantage/apex-section-bg-legends-vantage-xl.jpg.adapt.320w.jpg'
  },
   {
    id: 'catalyst',
    name: 'Catalyst',
    role: 'Controller',
    personality: ['Protective', 'Mystical', 'Defensive', 'Strategic'],
    playstyle: ['Area Control', 'Defense', 'Fortification'],
    difficulty: 2,
    abilities: {
      passive: 'Barricade - Reinforced doors',
      tactical: 'Piercing Spikes - Create ferrofluid wall',
      ultimate: 'Dark Veil - Raise ferrofluid wall'
    },
    image:'https://media.contentapi.ea.com/content/dam/apex-legends/common/eclipse/catalyst/apex-section-bg-legends-catalyst-xl.jpg.adapt.320w.jpg'
  },
  {
    id: 'ballistic',
    name: 'Ballistic',
    role: 'Assault',
    personality: ['Experienced', 'Confident', 'Competitive', 'Mentor'],
    playstyle: ['Weapon Specialist', 'Aggressive', 'Support'],
    difficulty: 2,
    abilities: {
      passive: 'Sling - Store third weapon',
      tactical: 'Whistler - Overload enemy weapons',
      ultimate: 'Tempest - Enhanced weapon handling'
    },
    image:'https://www.proguides.com/guides/wp-content/uploads/2023/05/BALLISTIC.png'
  },
  {
    id: 'conduit',
    name: 'Conduit',
    role: 'Support',
    personality: ['Energetic', 'Optimistic', 'Supportive', 'Tech-savvy'],
    playstyle: ['Shield Support', 'Team Utility', 'Mobile Support'],
    difficulty: 2,
    abilities: {
      passive: 'Shield Relay - Shield recharge on revive',
      tactical: 'Radiant Transfer - Shield charge dash',
      ultimate: 'Energy Barricade - Shield charging wall'
    },
    image: 'https://platform.polygon.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/25035164/Conduit_1.jpg?quality=90&strip=all&crop=21.875,0,56.25,100'
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