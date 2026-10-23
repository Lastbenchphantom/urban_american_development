/**
 * Leadership / team data.
 *
 * Source-confirmed names and roles from https://urbanbd.com/board-of-directors,
 * /admin, and /other_dept (inspected 2026-10-22).
 *
 * Phone numbers are redacted on the source ("+880 xxxx xxx xxx"); they are
 * shown as "Contact for details" and not fabricated.
 * Biographies beyond the two director messages are not available publicly.
 * Portrait photos are referenced from the source but direct download was not
 * possible; they are used as source URLs with fallbacks.
 */
export const LEADERSHIP = [
  {
    id: "humayun-kabir-shahen",
    name: "Humayun Kabir Shahen",
    role: "Chairman",
    organization: "UADCL",
    email: "chairman@urbanbd.com",
    phone: "Contact for details",
    image: "https://urbanbd.com/images/hk-chairman.jpg",
    imageAlt: "Humayun Kabir Shahen, Chairman",
    bio:
      "Chairman of Urban American Development Company Ltd. His director message emphasizes customer requirements, functional creativity, flawless design, and high construction quality.",
    sourceConfirmed: true,
  },
  {
    id: "anowarul-kabir",
    name: "Anowarul Kabir",
    role: "Managing Director",
    organization: "UADCL",
    email: "md@urbanbd.com",
    phone: "Contact for details",
    image: "https://urbanbd.com/images/ak-MD.jpg",
    imageAlt: "Anowarul Kabir, Managing Director",
    bio:
      "Managing Director of Urban American Development Company Ltd. His message focuses on preserving business portfolio value and empowering people to deliver client success.",
    sourceConfirmed: true,
  },
  {
    id: "jahangir-kabir",
    name: "Jahangir Kabir",
    role: "Director & HR Personnel",
    organization: "UADCL",
    email: "ceo@urbanbd.com",
    phone: "Contact for details",
    image: "https://urbanbd.com/images/kj-director.jpg",
    imageAlt: "Jahangir Kabir, Director & HR Personnel",
    bio: "Director and HR personnel at Urban American Development Company Ltd.",
    sourceConfirmed: true,
  },
  {
    id: "md-abu-bakar-siddique",
    name: "Mr. Md. Abu Bakar Siddique",
    role: "Director & Share Holder",
    organization: "UADCL",
    email: null,
    phone: "Contact for details",
    image: null,
    imageAlt: "Mr. Md. Abu Bakar Siddique",
    bio: "Director and share holder at Urban American Development Company Ltd.",
    sourceConfirmed: true,
  },
  {
    id: "khondaker-shamim-ahammad",
    name: "Mr. Khondaker Shamim Ahammad",
    role: "Director & Share Holder",
    organization: "UADCL",
    email: null,
    phone: "Contact for details",
    image: null,
    imageAlt: "Mr. Khondaker Shamim Ahammad",
    bio: "Director and share holder at Urban American Development Company Ltd.",
    sourceConfirmed: true,
  },
  {
    id: "mozammel-hossain",
    name: "Mr. Mozammel Hossain",
    role: "Director & Share Holder",
    organization: "UADCL",
    email: null,
    phone: "Contact for details",
    image: null,
    imageAlt: "Mr. Mozammel Hossain",
    bio: "Director and share holder at Urban American Development Company Ltd.",
    sourceConfirmed: true,
  },
  {
    id: "muhammad-saifur-rahman",
    name: "Muhammad Saifur Rahman",
    role: "Executive Director",
    organization: "HR & Admin Department, UADCL",
    email: "pabel@urbanbd.com",
    phone: "+880 1777 717663",
    image: "https://urbanbd.com/images/team02.jpg",
    imageAlt: "Muhammad Saifur Rahman, Executive Director",
    bio: "Executive Director leading HR & Administration at UADCL.",
    sourceConfirmed: true,
  },
];

export const DEPARTMENTS = [
  {
    id: "hr-admin",
    name: "HR & Admin Department",
    lead: "Muhammad Saifur Rahman — Executive Director",
    phone: "+880 1777 717663",
    email: "pabel@urbanbd.com",
    sourceConfirmed: true,
  },
  {
    id: "accounts-finance",
    name: "Accounts & Finance Department",
    lead: "Mr. Saidur Rahman — Sr. Executive",
    phone: "Contact for details",
    email: "accounts@urbanbd.com",
    sourceConfirmed: true,
  },
  {
    id: "marketing-sales",
    name: "Marketing & Sales Department",
    lead: "Mr. Feroz, Mizanur Rahman, Md Humayun Kabir — Executives",
    phone: "Contact for details",
    email: "sales@urbanbd.com",
    sourceConfirmed: true,
  },
  {
    id: "project-engineer",
    name: "Project Engineer Department",
    lead: "Engr. Mohammed Mohosin — Project Adviser; Mr. Feroz Khan — Project Engineer",
    phone: "+880 1777717662 (Mr. Feroz Khan)",
    email: null,
    sourceConfirmed: true,
  },
];
