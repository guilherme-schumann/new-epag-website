export { legalSharedContent, type LegalSharedContent } from './shared';
export { termsUsersContent, type TermsUsersContent } from './termsUsers';
export { termsMerchantsContent, type TermsMerchantsContent } from './termsMerchants';
export { privacyContent, type PrivacyContent } from './privacy';
export { imprintContent, type ImprintContent } from './imprint';
export { prohibitedContent, type ProhibitedContent } from './prohibited';

// Backward compatibility
import { legalSharedContent, type LegalSharedContent } from './shared';
export const legalContent = legalSharedContent;
export type LegalContent = LegalSharedContent;
