/**
 * Branch and contact data.
 *
 * Source-confirmed from https://urbanbd.com/contact and /about-us
 * (inspected 2026-10-22). Social media links are # placeholders on the
 * source and are not rendered as functional links.
 */
export const CONTACT = {
  corporateOffice:
    "M. M. Tower (7th Floor), 1105 GEC Circle, East Nasirabad, Chittagong, Bangladesh",
  telephones: ["+880 31 2556141-2", "+880 31 652273"],
  mobile: "+880 1777 717661-2-3-4",
  helplines: [
    "+880 1777 717 661",
    "+880 1777 717 662",
    "+880 1777 717 663",
    "+880 1777 717 664",
  ],
  emails: ["info@urbanbd.com", "support@urbanbd.com", "sales@urbanbd.com", "accounts@urbanbd.com"],
  careersEmail: "hrd@urbanbd.com",
};

export const BRANCHES = [
  {
    id: "chittagong",
    name: "Corporate Office — Chittagong",
    address:
      "M. M. Tower (7th Floor), 1105 GEC Circle, East Nasirabad, Chittagong, Bangladesh",
    phones: ["+880 31 2556141-2", "+880 31 652273"],
    mobile: "+880 1777 717661-2-3-4",
    emails: ["info@urbanbd.com", "support@urbanbd.com"],
    sourceConfirmed: true,
  },
  {
    id: "dhaka",
    name: "Dhaka Branch",
    address:
      "House 48, 3rd Floor, Road 2, Block B, Niketon, Gulshan 1, Dhaka 1212, Bangladesh",
    phones: [],
    mobile: null,
    emails: ["info@urbanbd.com"],
    sourceConfirmed: true,
  },
  {
    id: "uae",
    name: "UAE Branch",
    address:
      "Alston General Trading FZE, Ajman Free Zone, Ajman, UAE. P.O. Box 13669-AJ",
    phones: ["+971 05 1189460"],
    mobile: null,
    emails: ["info@urbanbd.com"],
    sourceConfirmed: true,
  },
  {
    id: "usa",
    name: "USA Branch",
    address: "406 East 8th Street, Brooklyn NY 11218, USA",
    phones: ["+1718 6721700", "+1718 6721701 (fax)"],
    mobile: "+1917 6678608",
    emails: ["info@urbanbd.com"],
    sourceConfirmed: true,
  },
  {
    id: "australia",
    name: "Australia Branch",
    address: "5/57 Macdonald Street, Lakemba, NSW 2195, Australia",
    phones: ["02 97599381"],
    mobile: "0430594661",
    emails: ["info@urbanbd.com"],
    sourceConfirmed: true,
  },
];
