/**
 * Apartment finder data.
 *
 * The official website does not publish verified live apartment inventory,
 * prices, or availability. To keep the UI functional, this module contains
 * clearly labeled demonstration unit data keyed to real project slugs. It is
 * NOT real inventory and must be replaced before production deployment.
 *
 * Budget filtering is intentionally NOT offered because no verified prices
 * exist.
 */
export const DEMONSTRATION_UNITS = {
  "park-hill": [
    { id: "ph-a-1", project: "Park Hill", type: "Type A", bedrooms: 2, sizeSft: 1466, floor: 4, facing: "South", sourceConfirmed: false },
    { id: "ph-b-1", project: "Park Hill", type: "Type B", bedrooms: 3, sizeSft: 1480, floor: 5, facing: "South", sourceConfirmed: false },
    { id: "ph-c-1", project: "Park Hill", type: "Type C", bedrooms: 2, sizeSft: 1273, floor: 3, facing: "South", sourceConfirmed: false },
    { id: "ph-d-1", project: "Park Hill", type: "Type D", bedrooms: 2, sizeSft: 1240, floor: 2, facing: "South", sourceConfirmed: false },
  ],
  "rahman-heights": [
    { id: "rh-a-1", project: "A. Rahman Heights", type: "Type A", bedrooms: 2, sizeSft: 1259, floor: 3, facing: "North", sourceConfirmed: false },
    { id: "rh-b-1", project: "A. Rahman Heights", type: "Type B", bedrooms: 3, sizeSft: 1431, floor: 4, facing: "North", sourceConfirmed: false },
    { id: "rh-c-1", project: "A. Rahman Heights", type: "Type C", bedrooms: 2, sizeSft: 1280, floor: 2, facing: "North", sourceConfirmed: false },
    { id: "rh-d-1", project: "A. Rahman Heights", type: "Type D", bedrooms: 3, sizeSft: 1328, floor: 5, facing: "North", sourceConfirmed: false },
  ],
  "abser-tower": [
    { id: "at-a-1", project: "Abser Tower", type: "Type A", bedrooms: 2, sizeSft: 1460, floor: 3, facing: "South", sourceConfirmed: false },
    { id: "at-b-1", project: "Abser Tower", type: "Type B", bedrooms: 2, sizeSft: 1460, floor: 4, facing: "South", sourceConfirmed: false },
  ],
  "azad-nibash": [
    { id: "an-a-1", project: "Azad Nibash", type: "Type A", bedrooms: 3, sizeSft: 1685, floor: 5, facing: "South", sourceConfirmed: false },
    { id: "an-b-1", project: "Azad Nibash", type: "Type B", bedrooms: 2, sizeSft: 1580, floor: 4, facing: "South", sourceConfirmed: false },
    { id: "an-c-1", project: "Azad Nibash", type: "Type C", bedrooms: 3, sizeSft: 1640, floor: 6, facing: "South", sourceConfirmed: false },
    { id: "an-d-1", project: "Azad Nibash", type: "Type D", bedrooms: 2, sizeSft: 1550, floor: 3, facing: "South", sourceConfirmed: false },
  ],
  "arif-plaza": [
    { id: "ap-a-1", project: "Arif Plaza", type: "Type A", bedrooms: 2, sizeSft: 1150, floor: 2, facing: "North", sourceConfirmed: false },
    { id: "ap-b-1", project: "Arif Plaza", type: "Type B", bedrooms: 2, sizeSft: 1120, floor: 3, facing: "North", sourceConfirmed: false },
  ],
  "salina-palace": [
    { id: "sp-a-1", project: "Salina Palace", type: "Type A", bedrooms: 2, sizeSft: 1500, floor: 3, facing: "South", sourceConfirmed: false },
    { id: "sp-b-1", project: "Salina Palace", type: "Type B", bedrooms: 2, sizeSft: 1500, floor: 4, facing: "South", sourceConfirmed: false },
  ],
  "urban-tasmariah": [
    { id: "tm-a-1", project: "Urban Tasmariah", type: "Type A", bedrooms: 2, sizeSft: 1500, floor: 3, facing: "South", sourceConfirmed: false },
    { id: "tm-b-1", project: "Urban Tasmariah", type: "Type B", bedrooms: 2, sizeSft: 1500, floor: 4, facing: "South", sourceConfirmed: false },
  ],
  "ocean-front": [
    { id: "of-royal-1", project: "Ocean Front", type: "Royal suite", bedrooms: 1, sizeSft: 1084, floor: 1, facing: "Sea", sourceConfirmed: false },
    { id: "of-crown-1", project: "Ocean Front", type: "Crown suite", bedrooms: 1, sizeSft: 589, floor: 2, facing: "Sea", sourceConfirmed: false },
    { id: "of-deluxe-1", project: "Ocean Front", type: "Deluxe suite", bedrooms: 1, sizeSft: 432, floor: 1, facing: "Sea", sourceConfirmed: false },
  ],
};

export const getUnitsForProject = (slug) => DEMONSTRATION_UNITS[slug] || [];

export const BEDROOM_OPTIONS = [1, 2, 3];
export const FACING_OPTIONS = ["South", "North", "East", "Sea"];
export const SORT_OPTIONS = [
  { value: "size-asc", label: "Size: Small to Large" },
  { value: "size-desc", label: "Size: Large to Small" },
  { value: "floor-asc", label: "Floor: Low to High" },
];
