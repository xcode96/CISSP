let questions = [
  {
    numb: 1,
    question: "All of the following items should be included in a Business Impact Analysis (BIA) questionnaire EXCEPT questions that",
    answer: "Determine the technological dependence of the business processes",
    options: ['Determine the risk of a business interruption occurring', 'Determine the technological dependence of the business processes', 'Identify the operational impacts of a business interruption', 'Identify the financial impacts of a business interruption'],
  },
  {
    numb: 2,
    question: "Which of the following actions will reduce risk to a laptop before traveling to a high risk area?",
    answer: "Examine the device for physical tampering",
    options: ['Examine the device for physical tampering', 'Implement more stringent baseline configurations', 'Purge or re-image the hard disk drive', 'Change access codes'],
  },
  {
    numb: 3,
    question: "Which of the following represents the GREATEST risk to data confidentiality?",
    answer: "Backup tapes are generated unencrypted",
    options: ['Network redundancies are not implemented', 'Security awareness training is not completed', 'Backup tapes are generated unencrypted', 'Users have administrative privileges'],
  },
  {
    numb: 4,
    question: "What is the MOST important consideration from a data security perspective when an organization plans to relocate?",
    answer: "Conduct a gap analysis of a new facility against existing security requirements",
    options: ['Ensure the fire prevention and detection systems are sufficient to protect personnel', 'Review the architectural plans to determine how many emergency exits are present', 'Conduct a gap analysis of a new facility against existing security requirements', 'Revise the Disaster Recovery and Business Continuity (DR/BC) plan'],
  },
  {
    numb: 5,
    question: "Which of the following failures should the IT manager be concerned with for a Business Continuity Plan (BCP)?",
    answer: "Power failure",
    options: ['Application failure', 'Storage failure', 'Power failure', 'Network failure'],
  },
  {
    numb: 6,
    question: "Which of the following is an initial consideration when developing an information security management system?",
    answer: "Understand the value of the information assets",
    options: ['Identify the contractual security obligations that apply to the organizations', 'Understand the value of the information assets', 'Identify the level of residual risk that is tolerable to management', 'Identify relevant legislative and regulatory compliance requirements'],
  },
  {
    numb: 7,
    question: "Which of the following is the BEST network defense against unknown types of attacks or stealth attacks in progress?",
    answer: "Network Behavior Analysis (NBA) tools",
    options: ['Intrusion Prevention Systems (IPS)', 'Intrusion Detection Systems (IDS)', 'Stateful firewalls', 'Network Behavior Analysis (NBA) tools'],
  },
  {
    numb: 8,
    question: "Which of the following factors contributes to the weakness of Wired Equivalent Privacy (WEP) protocol?",
    answer: "WEP uses a small range Initialization Vector (IV)",
    options: ['WEP uses a small range Initialization Vector (IV)', 'WEP uses Message Digest 5 (MD5)', 'WEP uses Diffie-Hellman', 'WEP does not use any Initialization Vector (IV)'],
  },
  {
    numb: 9,
    question: "Which of the following types of business continuity tests includes assessment of resilience to internal and external risks without endangering live operations?",
    answer: "Simulation",
    options: ['Walkthrough', 'Simulation', 'Parallel', 'White box'],
  },
  {
    numb: 10,
    question: "What is the PRIMARY reason for implementing change management?",
    answer: "Ensure accountability for changes to the environment",
    options: ['Certify and approve releases to the environment', 'Provide version rollbacks for system changes', 'Ensure that all applications are approved', 'Ensure accountability for changes to the environment'],
  },
  {
    numb: 11,
    question: "Which of the following is a PRIMARY advantage of using a third-party identity service?",
    answer: "Automated account management",
    options: ['Consolidation of multiple providers', 'Directory synchronization', 'Web based logon', 'Automated account management'],
  },
  {
    numb: 12,
    question: "Which of the following is an effective method for avoiding magnetic media data remanence?",
    answer: "Degaussing",
    options: ['Degaussing', 'Encryption', 'Data Loss Prevention (DLP)', 'Authentication'],
  },
  {
    numb: 13,
    question: "What is the FIRST action to protect the chain of evidence when a desktop computer is involved?",
    answer: "Start documenting",
    options: ['Take the computer to a forensic lab', 'Make a copy of the hard drive', 'Start documenting', 'Turn off the computer'],
  },
  {
    numb: 14,
    question: "Which of the following BEST describes an access control method utilizing cryptographic keys derived from a smart card private key that is embedded within mobile devices?",
    answer: "Derived credential",
    options: ['Derived credential', 'Temporary security credential', 'Mobile device credentialing service', 'Digest authentication'],
  },
  {
    numb: 15,
    question: "Which of the following BEST describes the responsibilities of a data owner?",
    answer: "Ensuring accessibility to appropriate users, maintaining appropriate levels of data security",
    options: ['Ensuring quality and validation through periodic audits for ongoing data integrity', 'Maintaining fundamental data availability, including data storage and archiving', 'Ensuring accessibility to appropriate users, maintaining appropriate levels of data security', 'Determining the impact the information has on the mission of the organization'],
  },
  {
    numb: 16,
    question: "Which security service is served by the process of encryption plaintext with the sender’s private key and decrypting cipher text with the sender’s public key?",
    answer: "Confidentiality",
    options: ['Confidentiality', 'Integrity', 'Identification', 'Availability'],
  },
  {
    numb: 17,
    question: "Which technique can be used to make an encryption scheme more resistant to a known plaintext attack?",
    answer: "Hashing the data before encryption",
    options: ['Hashing the data before encryption', 'Hashing the data after encryption', 'Compressing the data after encryption', 'Compressing the data before encryption'],
  },
  {
    numb: 18,
    question: "What is the second phase of Public Key Infrastructure (PKI) key/certificate life-cycle management?",
    answer: "Issued Phase",
    options: ['Implementation Phase', 'Initialization Phase', 'Cancellation Phase', 'Issued Phase'],
  },
  {
    numb: 19,
    question: "Which of the following is a limitation of the Common Vulnerability Scoring System (CVSS) as it relates to conducting code review?",
    answer: "It aims to calculate the risk of published vulnerabilities.",
    options: ['It has normalized severity ratings.', 'It has many worksheets and practices to implement.', 'It aims to calculate the risk of published vulnerabilities.', 'It requires a robust risk management framework to be put in place.'],
  },
  {
    numb: 20,
    question: "Which of the following components of the Security Content Automation Protocol (SCAP) specification contains the data required to estimate the severity of vulnerabilities identified by automated vulnerability assessments?",
    answer: "Common Vulnerability Scoring System (CVSS)",
    options: ['Common Vulnerabilities and Exposures (CVE)', 'Common Vulnerability Scoring System (CVSS)', 'Asset Reporting Format (ARF)', 'Open Vulnerability and Assessment Language (OVAL)'],
  },
  {
    numb: 21,
    question: "What is the PRIMARY goal of a penetration test?",
    answer: "To determine a system's ability to withstand an attack.",
    options: ["To determine a system's ability to withstand an attack.", "To identify a system's vulnerabilities.", "To measure a system's response under stress.", 'To check the recovery of a system.'],
  },
  {
    numb: 22,
    question: "Which of the following is an important principle of defense in depth?",
    answer: "Prevention, detection, and remediation",
    options: ['Development, testing, and deployment', 'Prevention, detection, and remediation', 'People, technology, and operations', 'Certification, accreditation, and monitoring'],
  },
  {
    numb: 23,
    question: "What is the most important consideration when assigning ownership of an asset to a department?",
    answer: "Ownership of the asset should be periodically reviewed",
    options: ['The department should report to the business owner', 'Ownership of the asset should be periodically reviewed', 'Individual accountability should be ensured', 'All members should be trained on their responsibilities'],
  },
  {
    numb: 24,
    question: "Which of the following is the MOST important consideration when storing and processing Personally Identifiable Information (PII)?",
    answer: "Adherence to collection limitation laws and regulations.",
    options: ['Encrypt and hash all PII to avoid disclosure and tampering.', 'Store PII for no more than one year.', 'Avoid storing PII in a Cloud Service Provider.', 'Adherence to collection limitation laws and regulations.'],
  },
  {
    numb: 25,
    question: "What is an effective practice when returning electronic storage media to third parties for repair?",
    answer: "Establishing a contract with the third party regarding the secure handling of the media",
    options: ["Ensuring the media is not labeled in any way that indicates the organization's name.", 'Disassembling the media and removing parts that may contain sensitive data.', 'Physically breaking parts of the media that may contain sensitive data.', 'Establishing a contract with the third party regarding the secure handling of the media.'],
  },
  {
    numb: 26,
    question: "Which of the following is the BEST method to prevent malware from being introduced into a production environment?",
    answer: "Test all new software in a segregated environment",
    options: ['Purchase software from a limited list of retailers', 'Verify the hash key or certificate key of all updates', 'Do not permit programs, patches, or updates from the Internet', 'Test all new software in a segregated environment'],
  },
  {
    numb: 27,
    question: "What is the MOST important step during forensic analysis when trying to learn the purpose of an unknown application?",
    answer: "Isolate the system from the network",
    options: ['Disable all unnecessary services', 'Ensure chain of custody', 'Prepare another backup of the system', 'Isolate the system from the network'],
  },
  {
    numb: 28,
    question: "What is the PRIMARY reason for security awareness training?",
    answer: "To ensure everyone understands the organization's policies and procedures",
    options: [
      "To ensure that everyone understands the organization's policies and procedures",
      "To communicate that access to information will be granted on a need-to-know basis",
      "To warn all users that access to all systems will be monitored on a daily basis",
      "To comply with regulations related to data and information protection"
    ]
  },
  {
    numb: 29,
    question: "Which of the following is a fundamental objective in handling an incident?",
    answer: "To restore control of the affected systems",
    options: [
      "To restore control of the affected systems",
      "To confiscate the suspect's computers",
      "To prosecute the attacker",
      "To perform full backups of the system"
    ]
  },
  {
    numb: 30,
    question: "Which of the following is the MOST effective layer of security to mitigate an attacker’s ability to gain further information in case of a network breach?",
    answer: "Implement logical network segmentation at the switches",
    options: [
      "Implement packet filtering on the network firewalls",
      "Require strong authentication for administrators",
      "Install Host Based Intrusion Detection Systems (HIDS)",
      "Implement logical network segmentation at the switches"
    ]
  },
  {
    numb: 31,
    question: "In a Disaster Recovery Plan, what should be the FIRST action when an incident occurs?",
    answer: "Investigate all symptoms to confirm the incident",
    options: [
      "Determine the cause of the incident",
      "Disconnect the system involved from the network",
      "Isolate and contain the system involved",
      "Investigate all symptoms to confirm the incident"
    ]
  },
  {
    numb: 32,
    question: "What should be done to verify the integrity of software patches?",
    answer: "Cryptographic checksums",
    options: [
      "Cryptographic checksums",
      "Version numbering",
      "Automatic updates",
      "Vendor assurance"
    ]
  },
  {
    numb: 33,
    question: "Which of the following is the MOST effective method for avoiding data leakage?",
    answer: "Encryption",
    options: [
      "Data classification",
      "Data validation",
      "Encryption",
      "Data loss prevention tools"
    ]
  },
  {
    numb: 34,
    question: "What is the PRIMARY goal of information classification?",
    answer: "To ensure that information assets receive an appropriate level of protection",
    options: [
      "To assign responsibility for mitigating the risk to vulnerable systems",
      "To ensure that information assets receive an appropriate level of protection",
      "To recognize that the value of any item of information may change over time",
      "To recognize the optimal number of classification categories and the benefits to be gained from their use"
    ]
  },
  {
    numb: 35,
    question: "Which of the following is the MOST important consideration when storing and processing Personally Identifiable Information (PII)?",
    answer: "Adherence to collection limitation laws and regulations.",
    options: [
      "Encrypt and hash all PII to avoid disclosure and tampering.",
      "Store PII for no more than one year.",
      "Avoid storing PII in a Cloud Service Provider.",
      "Adherence to collection limitation laws and regulations."
    ]
  },
  {
    numb: 36,
    question: "What is the BEST way to check for good security programming practices, as well as auditing for possible backdoors?",
    answer: "Code reviews",
    options: [
      "Log auditing",
      "Code reviews",
      "Impact assessments",
      "Static analysis"
    ]
  },
  {
    numb: 37,
    question: "What should be the FIRST step when implementing a patch management program?",
    answer: "Create a system inventory",
    options: [
      "Perform automatic deployment of patches",
      "Monitor for vulnerabilities and threats",
      "Prioritize vulnerability remediation",
      "Create a system inventory"
    ]
  },
  {
    numb: 38,
    question: "Which of the following BEST describes a method for evaluating security controls?",
    answer: "Penetration testing",
    options: [
      "Vulnerability scanning",
      "Penetration testing",
      "Static code analysis",
      "Risk assessments"
    ]
  },
  {
    numb: 39,
    question: "Which of the following is an important component of a Business Continuity Plan (BCP)?",
    answer: "Recovery strategies",
    options: [
      "Impact analysis",
      "Recovery strategies",
      "Risk assessments",
      "Testing procedures"
    ]
  },
  {
    numb: 40,
    question: "What is the PRIMARY purpose of encryption in data transmission?",
    answer: "Confidentiality",
    options: [
      "Confidentiality",
      "Integrity",
      "Availability",
      "Non-repudiation"
    ]
  },
  {
    numb: 41,
    question: "Which of the following security mechanisms is MOST effective in preventing e-mail spoofing?",
    answer: "Cryptographic signature",
    options: [
      "Spam filtering",
      "Cryptographic signature",
      "Uniform Resource Locator (URL) filtering",
      "Reverse Domain Name Service (DNS) lookup"
    ]
  },
  {
    numb: 42,
    question: "Which of the following is the BEST way to prevent malware from being introduced into a production environment?",
    answer: "Test all new software in a segregated environment",
    options: [
      "Purchase software from a limited list of retailers",
      "Verify the hash key or certificate key of all updates",
      "Do not permit programs, patches, or updates from the Internet",
      "Test all new software in a segregated environment"
    ]
  },
  {
    numb: 43,
    question: "What is the primary goal of a Business Impact Analysis (BIA)?",
    answer: "To understand how critical a system or asset is to business operations",
    options: [
      "To understand how critical a system or asset is to business operations",
      "To prepare for disaster recovery testing",
      "To create risk assessments",
      "To create business continuity strategies"
    ]
  },
  {
    numb: 44,
    question: "Which of the following types of encryption is MOST commonly used to secure data during transmission over the Internet?",
    answer: "Transport Layer Security (TLS)",
    options: [
      "Symmetric encryption",
      "Asymmetric encryption",
      "Transport Layer Security (TLS)",
      "Hashing"
    ]
  },
  {
    numb: 45,
    question: "What is the most effective method for securing web applications against injection attacks?",
    answer: "Input validation",
    options: [
      "Input validation",
      "Firewalls",
      "Encryption",
      "Access control lists"
    ]
  },
  {
    numb: 46,
    question: "Which of the following is a limitation of the Common Vulnerability Scoring System (CVSS)?",
    answer: "It does not consider the likelihood of an attack",
    options: [
      "It requires external tools for assessing vulnerabilities",
      "It does not consider the likelihood of an attack",
      "It relies too much on subjective judgment",
      "It does not apply to all types of vulnerabilities"
    ]
  },
  {
    numb: 47,
    question: "Which of the following is the BEST approach for testing a Business Continuity Plan (BCP)?",
    answer: "Test when environment changes",
    options: [
      "Test before the IT Audit",
      "Test when environment changes",
      "Test after installation of security patches",
      "Test after implementation of system patches"
    ]
  },
  {
    numb: 48,
    question: "Which of the following best describes a vulnerability assessment?",
    answer: "Identifying and quantifying security weaknesses in a system",
    options: [
      "Identifying and quantifying security weaknesses in a system",
      "Testing the effectiveness of existing security controls",
      "Assessing the probability of a threat actor exploiting a vulnerability",
      "Evaluating the financial impact of security incidents"
    ]
  },
  {
    numb: 49,
    question: "What is the PRIMARY benefit of using multi-factor authentication?",
    answer: "Increased security by requiring multiple forms of identification",
    options: [
      "Increased security by requiring multiple forms of identification",
      "Increased convenience by reducing the number of passwords needed",
      "Reduced system access time",
      "Reduced administrative overhead"
    ]
  },
  {
    numb: 50,
    question: "What is the MOST important consideration when implementing a security policy?",
    answer: "Ensure it aligns with the organization’s business goals and needs",
    options: [
      "Ensure it aligns with the organization’s business goals and needs",
      "Make it as detailed as possible",
      "Ensure it covers every security aspect of the organization",
      "Ensure it is strictly enforced"
    ]
  }
];
