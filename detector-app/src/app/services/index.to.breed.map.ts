/**
 * Map of index to dog breed name. We get an array of probabilites from
 * the Tensorflow Serving client and need to select a maximum probability.
 * Its index indicates one of the known 133 breeds we have. Using the index
 * we return a breed name using the map
 */
export const IndexToBreedMap: { [key: number]: string; } = {
    0: 'Affenpinscher',
    1: 'Afghan Hound',
    2: 'Airedale Terrier',
    3: 'Akita',
    4: 'Alaskan Malamute',
    5: 'American Eskimo Dog',
    6: 'American Foxhound',
    7: 'American Staffordshire Terrier',
    8: 'American Water Spaniel',
    9: 'Anatolian Shepherd Dog',
    10: 'Australian Cattle Dog',
    11: 'Australian Shepherd',
    12: 'Australian Terrier',
    13: 'Basenji',
    14: 'Basset Hound',
    15: 'Beagle',
    16: 'Bearded Collie',
    17: 'Beauceron',
    18: 'Bedlington Terrier',
    19: 'Belgian Malinois',
    20: 'Belgian Sheepdog',
    21: 'Belgian Tervuren',
    22: 'Bernese Mountain Dog',
    23: 'Bichon Frise',
    24: 'Black and Tan Coonhound',
    25: 'Black Russian Terrier',
    26: 'Bloodhound',
    27: 'Bluetick Coonhound',
    28: 'Border Collie',
    29: 'Border Terrier',
    30: 'Borzoi',
    31: 'Boston Terrier',
    32: 'Bouvier des Flandres',
    33: 'Boxer',
    34: 'Boykin Spaniel',
    35: 'Briard',
    36: 'Brittany',
    37: 'Brussels Griffon',
    38: 'Bull Terrier',
    39: 'Bulldog',
    40: 'Bullmastiff',
    41: 'Cairn Terrier',
    42: 'Canaan Dog',
    43: 'Cane Corso',
    44: 'Cardigan Welsh Corgi',
    45: 'Cavalier King Charles Spaniel',
    46: 'Chesapeake Bay Retriever',
    47: 'Chihuahua',
    48: 'Chinese Crested',
    49: 'Chinese Sharpei',
    50: 'Chow Chow',
    51: 'Clumber Spaniel',
    52: 'Cocker Spaniel',
    53: 'Collie',
    54: 'Curly-coated Retriever',
    55: 'Dachshund',
    56: 'Dalmatian',
    57: 'Dandie Dinmont Terrier',
    58: 'Doberman Pinscher',
    59: 'Dogue de Bordeaux',
    60: 'English Cocker Spaniel',
    61: 'English Setter',
    62: 'English Springer Spaniel',
    63: 'English Toy Spaniel',
    64: 'Entlebucher Mountain Dog',
    65: 'Field Spaniel',
    66: 'Finnish Spitz',
    67: 'Flat-coatet Retriever',
    68: 'French Bulldog',
    69: 'German Pinscher',
    70: 'German Shepherd Dog',
    71: 'German Shorthaired Pointer',
    72: 'German Wirehaired Pointer',
    73: 'Giant Schnauzer',
    74: 'Glen of Imaal Terrier',
    75: 'Golden Retriever',
    76: 'Gordon Setter',
    77: 'Great Dane',
    78: 'Great Pyrenees',
    79: 'Greater Swiss Mountain Dog',
    80: 'Greyhound',
    81: 'Havanese',
    82: 'Ibizan Hound',
    83: 'Icelandic Sheepdog',
    84: 'Irish Red and White Setter',
    85: 'Irish Setter',
    86: 'Irish Terrier',
    87: 'Irish Water Spaniel',
    88: 'Irish Wolfhound',
    89: 'Italian Greyhound',
    90: 'Japanese Chin',
    91: 'Keeshond',
    92: 'Kerry Blue Terrier',
    93: 'Komondor',
    94: 'Kuvasz',
    95: 'Labrador Retriever',
    96: 'Lakeland Terrier',
    97: 'Leonberger',
    98: 'Lhasa Apso',
    99: 'Lowchen',
    100: 'Maltese',
    101: 'Manchester Terrier',
    102: 'Mastiff',
    103: 'Miniature Schnauzer',
    104: 'Neapolitan Mastiff',
    105: 'Newfoundland',
    106: 'Norfolk Terrier',
    107: 'Norwegian Buhund',
    108: 'Norwegian Elkhound',
    109: 'Norwegian Lundehund',
    110: 'Norwich Terrier',
    111: 'Nova Scotia Duck Tolling Retriever',
    112: 'Old English Sheepdog',
    113: 'Otterhound',
    114: 'Papillon',
    115: 'Parson Russell Terrier',
    116: 'Pekingese',
    117: 'Pembroke Welsh Corgi',
    118: 'Petit Basset Griffon Vendeen',
    119: 'Pharaoh Hound',
    120: 'Plott',
    121: 'Pointer',
    122: 'Pomeranian',
    123: 'Poodle',
    124: 'Portuguese Water Dog',
    125: 'Saint Bernard',
    126: 'Silky Terrier',
    127: 'Smooth Fox Terrier',
    128: 'Tibetan Mastiff',
    129: 'Welsh Springer Spaniel',
    130: 'Wirehaired Pointing Griffon',
    131: 'Xoloitzcuintli',
    132: 'Yorkshire Terrier',
};

export const UNKNOWN_BREED = '<Unknown Dog Breed>';
