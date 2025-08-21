let questions = [
  {
    numb: 1,
    question: "What does HTML stand for?",
    answer: "Hyper Text Markup Language",
    options: [
      "Hyper Text Preprocessor",
      "Hyper Text Markup Language",
      "Hyper Text Multiple Language",
      "Hyper Tool Multi Language"
    ]
  },
  {
    numb: 2,
    question: "Which of the following actions will reduce risk to a laptop before traveling to a high-risk area?",
    answer: "Examine the device for physical tampering",
    options: [
      "Examine the device for physical tampering",
      "Implement more stringent baseline configurations",
      "Purge or re-image the hard disk drive",
      "Change access codes"
    ]
  },
  {
    numb: 3,
    question: "Which of the following represents the GREATEST risk to data confidentiality?",
    answer: "Backup tapes are generated unencrypted",
    options: [
      "Network redundancies are not implemented",
      "Security awareness training is not completed",
      "Backup tapes are generated unencrypted",
      "Users have administrative privileges"
    ]
  },
  {
    numb: 4,
    question: "What is the MOST important consideration from a data security perspective when an organization plans to relocate?",
    answer: "Conduct a gap analysis of a new facility against existing security requirements",
    options: [
      "Ensure the fire prevention and detection systems are sufficient to protect personnel",
      "Review the architectural plans to determine how many emergency exits are present",
      "Conduct a gap analysis of a new facility against existing security requirements",
      "Revise the Disaster Recovery and Business Continuity (DR/BC) plan"
    ]
  },
  {
    numb: 5,
    question: "Which of the following failures should the IT manager be concerned with for a Business Continuity Plan (BCP)?",
    answer: "Power failure",
    options: [
      "Application failure",
      "Storage failure",
      "Power failure",
      "Network failure"
    ]
  },
  {
    numb: 6,
    question: "Which of the following is an initial consideration when developing an information security management system?",
    answer: "Understand the value of the information assets",
    options: [
      "Identify the contractual security obligations that apply to the organizations",
      "Understand the value of the information assets",
      "Identify the level of residual risk that is tolerable to management",
      "Identify relevant legislative and regulatory compliance requirements"
    ]
  },
  {
    numb: 7,
    question: "Which of the following is the BEST network defense against unknown types of attacks or stealth attacks in progress?",
    answer: "Network Behavior Analysis (NBA) tools",
    options: [
      "Intrusion Prevention Systems (IPS)",
      "Intrusion Detection Systems (IDS)",
      "Stateful firewalls",
      "Network Behavior Analysis (NBA) tools"
    ]
  },
  {
    numb: 8,
    question: "Which of the following factors contributes to the weakness of Wired Equivalent Privacy (WEP) protocol?",
    answer: "WEP uses a small range Initialization Vector (IV)",
    options: [
      "WEP uses a small range Initialization Vector (IV)",
      "WEP uses Message Digest 5 (MD5)",
      "WEP uses Diffie-Hellman",
      "WEP does not use any Initialization Vector (IV)"
    ]
  },
  {
    numb: 9,
    question: "Which of the following types of business continuity tests includes assessment of resilience to internal and external risks without endangering live operations?",
    answer: "Simulation",
    options: [
      "Walkthrough",
      "Simulation",
      "Parallel",
      "White box"
    ]
  },
  {
    numb: 10,
    question: "What is the PRIMARY reason for implementing change management?",
    answer: "Ensure accountability for changes to the environment",
    options: [
      "Certify and approve releases to the environment",
      "Provide version rollbacks for system changes",
      "Ensure that all applications are approved",
      "Ensure accountability for changes to the environment"
    ]
  },
  {
    numb: 11,
    question: "Which of the following is a PRIMARY advantage of using a third-party identity service?",
    answer: "Automated account management",
    options: [
      "Consolidation of multiple providers",
      "Directory synchronization",
      "Web based logon",
      "Automated account management"
    ]
  },
  {
    numb: 12,
    question: "Which of the following is an effective method for avoiding magnetic media data remanence?",
    answer: "Degaussing",
    options: [
      "Degaussing",
      "Encryption",
      "Data Loss Prevention (DLP)",
      "Authentication"
    ]
  },
  {
    numb: 13,
    question: "What is the FIRST action to protect the chain of evidence when a desktop computer is involved?",
    answer: "Start documenting",
    options: [
      "Take the computer to a forensic lab",
      "Make a copy of the hard drive",
      "Start documenting",
      "Turn off the computer"
    ]
  },
  {
    numb: 14,
    question: "Which of the following BEST describes an access control method utilizing cryptographic keys derived from a smart card private key that is embedded within mobile devices?",
    answer: "Derived credential",
    options: [
      "Derived credential",
      "Temporary security credential",
      "Mobile device credentialing service",
      "Digest authentication"
    ]
  },
  {
    numb: 15,
    question: "Which of the following BEST describes the responsibilities of a data owner?",
    answer: "Ensuring accessibility to appropriate users, maintaining appropriate levels of data security",
    options: [
      "Ensuring quality and validation through periodic audits for ongoing data integrity",
      "Maintaining fundamental data availability, including data storage and archiving",
      "Ensuring accessibility to appropriate users, maintaining appropriate levels of data security",
      "Determining the impact the information has on the mission of the organization"
    ]
  },
  {
    numb: 16,
    question: "Which security service is served by the process of encryption plaintext with the sender’s private key and decrypting cipher text with the sender’s public key?",
    answer: "Confidentiality",
    options: [
      "Confidentiality",
      "Integrity",
      "Identification",
      "Availability"
    ]
  },
  {
    numb: 17,
    question: "Which technique can be used to make an encryption scheme more resistant to a known plaintext attack?",
    answer: "Hashing the data before encryption",
    options: [
      "Hashing the data before encryption",
      "Hashing the data after encryption",
      "Compressing the data after encryption",
      "Compressing the data before encryption"
    ]
  },
  {
    numb: 18,
    question: "What is the second phase of Public Key Infrastructure (PKI) key/certificate life-cycle management?",
    answer: "Issued Phase",
    options: [
      "Implementation Phase",
      "Initialization Phase",
      "Cancellation Phase",
      "Issued Phase"
    ]
  },
  {
    numb: 19,
    question: "Which of the following is a limitation of the Common Vulnerability Scoring System (CVSS) as it relates to conducting code review?",
    answer: "It aims to calculate the risk of published vulnerabilities.",
    options: [
      "It has normalized severity ratings.",
      "It has many worksheets and practices to implement.",
      "It aims to calculate the risk of published vulnerabilities.",
      "It requires a robust risk management framework to be put in place."
    ]
  },
  {
    numb: 20,
    question: "Which of the following components of the Security Content Automation Protocol (SCAP) specification contains the data required to estimate the severity of vulnerabilities identified by automated vulnerability assessments?",
    answer: "Common Vulnerability Scoring System (CVSS)",
    options: [
      "Common Vulnerabilities and Exposures (CVE)",
      "Common Vulnerability Scoring System (CVSS)",
      "Asset Reporting Format (ARF)",
      "Open Vulnerability and Assessment Language (OVAL)"
    ]
  },
  {
    numb: 21,
    question: "What is the PRIMARY goal of a penetration test?",
    answer: "To determine a system's ability to withstand an attack.",
    options: [
      "To determine a system's ability to withstand an attack.",
      "To identify a system's vulnerabilities.",
      "To measure a system's response under stress.",
      "To check the recovery of a system."
    ]
  },
  {
    numb: 22,
    question: "Which of the following is an important principle of defense in depth?",
    answer: "Prevention, detection, and remediation",
    options: [
      "Development, testing, and deployment",
      "Prevention, detection, and remediation",
      "People, technology, and operations",
      "Certification, accreditation, and monitoring"
    ]
  },
  {
    numb: 23,
    question: "What is the most important consideration when assigning ownership of an asset to a department?",
    answer: "Ownership of the asset should be periodically reviewed",
    options: [
      "The department should report to the business owner",
      "Ownership of the asset should be periodically reviewed",
      "Individual accountability should be ensured",
      "All members should be trained on their responsibilities"
    ]
  },
  {
    numb: 24,
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
    numb: 25,
    question: "What is an effective practice when returning electronic storage media to third parties for repair?",
    answer: "Establishing a contract with the third party regarding the secure handling of the media",
    options: [
      "Ensuring the media is not labeled in any way that indicates the organization's name.",
      "Disassembling the media and removing parts that may contain sensitive data.",
      "Physically breaking parts of the media that may contain sensitive data.",
      "Establishing a contract with the third party regarding the secure handling of the media."
    ]
  },
  {
    numb: 26,
    question: "Which of the following is the BEST method to prevent malware from being introduced into a production environment?",
    answer: "Test all new software in a segregated environment",
    options: [
      "Purchase software from a limited list of retailers",
      "Verify the hash key or certificate key of all updates",
      "Do not permit programs, patches, or updates from the Internet",
      "Test all new software in a segregated environment"
    ]
  },
  {
    numb: 27,
    question: "What is the MOST important step during forensic analysis when trying to learn the purpose of an unknown application?",
    answer: "Isolate the system from the network",
    options: [
      "Disable all unnecessary services",
      "Ensure chain of custody",
      "Prepare another backup of the system",
      "Isolate the system from the network"
    ]
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
  },
  {
    numb: 51,
    question: "Which one of the following is a threat related to the use of web-based client side input validation?",
    answer: "Users would be able to alter the input after validation has occurred",
    options: [
      "Users would be able to alter the input after validation has occurred",
      "The web server would not be able to validate the input after transmission",
      "The client system could receive invalid input from the web server",
      "The web server would not be able to receive invalid input from the client"
    ]
  },
  {
    numb: 52,
    question: "To prevent inadvertent disclosure of restricted information, which of the following would be the LEAST effective process for eliminating data prior to the media being discarded?",
    answer: "High-level formatting",
    options: [
      "Multiple-pass overwriting",
      "Degaussing",
      "High-level formatting",
      "Physical destruction"
    ]
  },
  {
    numb: 53,
    question: "Multi-threaded applications are more at risk than single-threaded applications to",
    answer: "race conditions",
    options: [
      "race conditions",
      "virus infection",
      "packet sniffing",
      "database injection"
    ]
  },
  {
    numb: 54,
    question: "Which of the following is a potential risk when a program runs in privileged mode?",
    answer: "It may allow malicious code to be inserted",
    options: [
      "It may serve to create unnecessary code complexity",
      "It may not enforce job separation duties",
      "It may create unnecessary application hardening",
      "It may allow malicious code to be inserted"
    ]
  },
  {
    numb: 55,
    question: "The goal of software assurance in application development is to",
    answer: "prevent the creation of vulnerable applications.",
    options: [
      "enable the development of High Availability (HA) systems.",
      "facilitate the creation of Trusted Computing Base (TCB) systems.",
      "prevent the creation of vulnerable applications.",
      "encourage the development of open source applications."
    ]
  },
  {
    numb: 56,
    question: "What is the ultimate objective of information classification?",
    answer: "To ensure that information assets receive an appropriate level of protection",
    options: [
      "To assign responsibility for mitigating the risk to vulnerable systems",
      "To ensure that information assets receive an appropriate level of protection",
      "To recognize that the value of any item of information may change over time",
      "To recognize the optimal number of classification categories and the benefits to be gained from their use"
    ]
  },
  {
    numb: 57,
    question: "In a financial institution, who has the responsibility for assigning the classification to a piece of information?",
    answer: "Originator or nominated owner of the information",
    options: [
      "Chief Financial Officer (CFO)",
      "Chief Information Security Officer (CISO)",
      "Originator or nominated owner of the information",
      "Department head responsible for ensuring the protection of the information"
    ]
  },
  {
    numb: 58,
    question: "An organization is designing a large enterprise-wide document repository system. They plan to have several different classification level areas with increasing levels of controls. The BEST way to ensure document confidentiality in the repository is to",
    answer: "encrypt the contents of the repository and document any exceptions to that requirement.",
    options: [
      "encrypt the contents of the repository and document any exceptions to that requirement.",
      "utilize Intrusion Detection System (IDS) set drop connections if too many requests for documents are detected.",
      "keep individuals with access to high security areas from saving those documents into lower security areas.",
      "require individuals with access to the system to sign Non-Disclosure Agreements (NDA)."
    ]
  },
  {
    numb: 59,
    question: "What technique BEST describes antivirus software that detects viruses by watching anomalous behavior?",
    answer: "Heuristic",
    options: [
      "Signature",
      "Inference",
      "Induction",
      "Heuristic"
    ]
  },
  {
    numb: 60,
    question: "Contingency plan exercises are intended to do which of the following?",
    answer: "Train personnel in roles and responsibilities",
    options: [
      "Train personnel in roles and responsibilities",
      "Validate service level agreements",
      "Train maintenance personnel",
      "Validate operation metrics"
    ]
  },
  {
    numb: 61,
    question: "Two companies wish to share electronic inventory and purchase orders in a supplier and client relationship. What is the BEST security solution for them?",
    answer: "Set up a Virtual Private Network (VPN) between the two companies.",
    options: [
      "Write a Service Level Agreement (SLA) for the two companies.",
      "Set up a Virtual Private Network (VPN) between the two companies.",
      "Configure a firewall at the perimeter of each of the two companies.",
      "Establish a File Transfer Protocol (FTP) connection between the two companies."
    ]
  },
  {
    numb: 62,
    question: "Including a Trusted Platform Module (TPM) in the design of a computer system is an example of a technique to what?",
    answer: "Establish a secure initial state",
    options: [
      "Interface with the Public Key Infrastructure (PKI)",
      "Improve the quality of security software",
      "Prevent Denial of Service (DoS) attacks",
      "Establish a secure initial state"
    ]
  },
  {
    numb: 63,
    question: "Which of the following would be the FIRST step to take when implementing a patch management program?",
    answer: "Create a system inventory",
    options: [
      "Perform automatic deployment of patches.",
      "Monitor for vulnerabilities and threats.",
      "Prioritize vulnerability remediation.",
      "Create a system inventory."
    ]
  },
  {
    numb: 64,
    question: "When designing a networked Information System (IS) where there will be several different types of individual access, what is the FIRST step that should be taken to ensure all access control requirements are addressed?",
    answer: "Create a user access matrix.",
    options: [
      "Create a user profile.",
      "Create a user access matrix.",
      "Develop an Access Control List (ACL).",
      "Develop a Role Based Access Control (RBAC) list."
    ]
  },
  {
    numb: 65,
    question: "Which of the following is the BEST way to verify the integrity of a software patch?",
    answer: "Cryptographic checksums",
    options: [
      "Cryptographic checksums",
      "Version numbering",
      "Automatic updates",
      "Vendor assurance"
    ]
  },
  {
    numb: 66,
    question: "Which of the following is considered best practice for preventing e-mail spoofing?",
    answer: "Cryptographic signature",
    options: [
      "Spam filtering",
      "Cryptographic signature",
      "Uniform Resource Locator (URL) filtering",
      "Reverse Domain Name Service (DNS) lookup"
    ]
  },
  {
    numb: 67,
    question: "Alternate encoding such as hexadecimal representations is MOST often observed in which of the following forms of attack?",
    answer: "Cross site scripting (XSS)",
    options: [
      "Smurf",
      "Rootkit exploit",
      "Denial of Service (DoS)",
      "Cross site scripting (XSS)"
    ]
  },
  {
    numb: 68,
    question: "What would be the PRIMARY concern when designing and coordinating a security assessment for an Automatic Teller Machine (ATM) system?",
    answer: "Physical access to the electronic hardware",
    options: [
      "Physical access to the electronic hardware",
      "Regularly scheduled maintenance process",
      "Availability of the network connection",
      "Processing delays"
    ]
  },
  {
    numb: 69,
    question: "The Hardware Abstraction Layer (HAL) is implemented in the",
    answer: "system software.",
    options: [
      "system software.",
      "system hardware.",
      "application software.",
      "network hardware."
    ]
  },
  {
    numb: 70,
    question: "A security professional has just completed their organization's Business Impact Analysis (BIA). Following Business Continuity Plan/Disaster Recovery Plan (BCP/DRP) best practices, what would be the professional's NEXT step?",
    answer: "Identify and select recovery strategies.",
    options: [
      "Identify and select recovery strategies.",
      "Present the findings to management for funding.",
      "Select members for the organization's recovery teams.",
      "Prepare a plan to test the organization's ability to recover its operations."
    ]
  },
  {
    numb: 71,
    question: "Which of the following is the MOST appropriate security control for securing sensitive data stored on a laptop?",
    answer: "Full disk encryption",
    options: [
      "Password protection",
      "Full disk encryption",
      "File-level encryption",
      "Backup of the data"
    ]
  },
  {
    numb: 72,
    question: "What is the main purpose of conducting a vulnerability scan?",
    answer: "To identify potential security weaknesses",
    options: [
      "To identify potential security weaknesses",
      "To test the effectiveness of security controls",
      "To evaluate network traffic",
      "To confirm compliance with policies"
    ]
  },
  {
    numb: 73,
    question: "Which of the following actions will best mitigate the risk of SQL injection attacks?",
    answer: "Input validation and parameterized queries",
    options: [
      "Input validation and parameterized queries",
      "Using complex passwords",
      "Disabling JavaScript on web pages",
      "Running antivirus software"
    ]
  },
  {
    numb: 74,
    question: "Which of the following is a critical part of the incident response lifecycle?",
    answer: "Containment",
    options: [
      "Recovery",
      "Containment",
      "Investigation",
      "Remediation"
    ]
  },
  {
    numb: 75,
    question: "What is the primary benefit of network segmentation?",
    answer: "Limiting the spread of attacks",
    options: [
      "Improving network performance",
      "Limiting the spread of attacks",
      "Increasing throughput",
      "Reducing administrative overhead"
    ]
  },
  {
    numb: 76,
    question: "Which of the following is an example of a preventive security control?",
    answer: "Firewalls",
    options: [
      "Firewalls",
      "Intrusion detection systems",
      "Security audits",
      "Security incident response"
    ]
  },
  {
    numb: 77,
    question: "What is the purpose of data encryption?",
    answer: "To protect the confidentiality of data",
    options: [
      "To protect the confidentiality of data",
      "To ensure the integrity of data",
      "To compress the data size",
      "To speed up data transmission"
    ]
  },
  {
    numb: 78,
    question: "Which type of attack involves intercepting and altering communications between two parties without their knowledge?",
    answer: "Man-in-the-middle attack",
    options: [
      "Phishing attack",
      "Man-in-the-middle attack",
      "Denial of Service attack",
      "SQL injection attack"
    ]
  },
  {
    numb: 79,
    question: "What is a key consideration when developing a Business Continuity Plan (BCP)?",
    answer: "Recovery time objective (RTO)",
    options: [
      "Recovery point objective (RPO)",
      "Recovery time objective (RTO)",
      "Encryption standards",
      "Threat analysis"
    ]
  },
  {
    numb: 80,
    question: "Which of the following is a component of the risk management process?",
    answer: "Risk assessment",
    options: [
      "Compliance monitoring",
      "Incident detection",
      "Risk assessment",
      "Data classification"
    ]
  },
  {
    numb: 81,
    question: "What is the purpose of a security audit?",
    answer: "To evaluate the effectiveness of security controls",
    options: [
      "To evaluate the effectiveness of security controls",
      "To monitor network traffic",
      "To implement security patches",
      "To prevent data breaches"
    ]
  },
  {
    numb: 82,
    question: "What is the most common method used to authenticate users on a network?",
    answer: "Username and password",
    options: [
      "Username and password",
      "Smart cards",
      "Biometric authentication",
      "Single sign-on (SSO)"
    ]
  },
  {
    numb: 83,
    question: "Which of the following is an example of an administrative security control?",
    answer: "User access reviews",
    options: [
      "Firewalls",
      "User access reviews",
      "Encryption",
      "Network segmentation"
    ]
  },
  {
    numb: 84,
    question: "Which of the following is a method for preventing malware from spreading on a network?",
    answer: "Network segmentation",
    options: [
      "Antivirus software",
      "Network segmentation",
      "Data backups",
      "Employee training"
    ]
  },
  {
    numb: 85,
    question: "Which of the following is an important part of a disaster recovery plan?",
    answer: "Regular testing of recovery procedures",
    options: [
      "Inventory of hardware assets",
      "Regular testing of recovery procedures",
      "User awareness training",
      "Password policies"
    ]
  },
  {
    numb: 86,
    question: "What is the primary purpose of a firewall?",
    answer: "To control traffic between different network zones",
    options: [
      "To control traffic between different network zones",
      "To encrypt sensitive data",
      "To monitor network traffic",
      "To provide redundancy in case of failure"
    ]
  },
  {
    numb: 87,
    question: "What is the purpose of access control in information security?",
    answer: "To limit access to information based on user roles",
    options: [
      "To limit access to information based on user roles",
      "To monitor user behavior",
      "To ensure data integrity",
      "To prevent physical theft of devices"
    ]
  },
  {
    numb: 88,
    question: "Which of the following is a type of social engineering attack?",
    answer: "Phishing",
    options: [
      "Phishing",
      "Buffer overflow",
      "Denial of Service",
      "Cross-site scripting"
    ]
  },
  {
    numb: 89,
    question: "Which of the following would be a reason to implement two-factor authentication?",
    answer: "To add an extra layer of security",
    options: [
      "To add an extra layer of security",
      "To reduce password complexity",
      "To speed up the login process",
      "To allow more frequent password changes"
    ]
  },
  {
    numb: 90,
    question: "What is the purpose of a risk assessment in security?",
    answer: "To identify and evaluate risks to information assets",
    options: [
      "To monitor user activity",
      "To identify and evaluate risks to information assets",
      "To classify sensitive data",
      "To implement security patches"
    ]
  },
  {
    numb: 91,
    question: "Which of the following is a type of malicious software designed to gain unauthorized access to a system?",
    answer: "Trojan horse",
    options: [
      "Virus",
      "Trojan horse",
      "Spyware",
      "Worm"
    ]
  },
  {
    numb: 92,
    question: "What is the MOST effective way to prevent data loss?",
    answer: "Implement a comprehensive backup strategy",
    options: [
      "Use encryption",
      "Use strong passwords",
      "Implement a comprehensive backup strategy",
      "Install antivirus software"
    ]
  },
  {
    numb: 93,
    question: "What is the best method for ensuring the integrity of data in transit?",
    answer: "Data encryption",
    options: [
      "Data encryption",
      "Data compression",
      "Data hashing",
      "Data de-duplication"
    ]
  },
  {
    numb: 94,
    question: "What is the purpose of intrusion detection systems (IDS)?",
    answer: "To monitor network traffic for signs of suspicious activity",
    options: [
      "To monitor network traffic for signs of suspicious activity",
      "To block incoming traffic from known sources",
      "To provide backup for critical systems",
      "To prevent malware from entering the network"
    ]
  },
  {
    numb: 95,
    question: "Which of the following is a technique used to protect against brute-force password attacks?",
    answer: "Account lockout after several failed login attempts",
    options: [
      "Password complexity requirements",
      "Account lockout after several failed login attempts",
      "Encryption of passwords",
      "User education on password strength"
    ]
  },
  {
    numb: 96,
    question: "What is a key feature of asymmetric encryption?",
    answer: "It uses a pair of keys: public and private",
    options: [
      "It uses a pair of keys: public and private",
      "It uses a single key for both encryption and decryption",
      "It encrypts data faster than symmetric encryption",
      "It is less secure than symmetric encryption"
    ]
  },
  {
    numb: 97,
    question: "What is the primary function of an intrusion prevention system (IPS)?",
    answer: "To detect and block potential security threats",
    options: [
      "To detect and block potential security threats",
      "To monitor network traffic for signs of suspicious activity",
      "To create backups of sensitive data",
      "To analyze application vulnerabilities"
    ]
  },
  {
    numb: 98,
    question: "Which of the following is a common method of preventing unauthorized access to a system?",
    answer: "Access control lists (ACLs)",
    options: [
      "Access control lists (ACLs)",
      "Data backups",
      "Encryption of data at rest",
      "Network monitoring"
    ]
  },
  {
    numb: 99,
    question: "What is the primary goal of a security policy?",
    answer: "To provide guidelines for securing information assets",
    options: [
      "To provide guidelines for securing information assets",
      "To monitor user activity",
      "To detect malware",
      "To implement encryption techniques"
    ]
  },
  {
    numb: 100,
    question: "Which of the following best describes the role of a Chief Information Security Officer (CISO)?",
    answer: "To oversee the organization's information security strategy",
    options: [
      "To oversee the organization's information security strategy",
      "To conduct vulnerability assessments",
      "To implement security policies and procedures",
      "To perform system audits"
    ]
  },
  {
    numb: 101,
    question: "What is the primary purpose of encryption in information security?",
    answer: "To protect the confidentiality of data",
    options: [
      "To protect the confidentiality of data",
      "To ensure the availability of data",
      "To maintain the integrity of data",
      "To verify the authenticity of data"
    ]
  },
  {
    numb: 102,
    question: "What is the MOST effective method for controlling access to a network?",
    answer: "Implementing a firewall",
    options: [
      "Implementing a firewall",
      "Using encryption for all data",
      "Monitoring network traffic",
      "Implementing multi-factor authentication"
    ]
  },
  {
    numb: 103,
    question: "Which of the following is an example of an access control model?",
    answer: "Role-Based Access Control (RBAC)",
    options: [
      "Role-Based Access Control (RBAC)",
      "Symmetric Encryption",
      "Time-Stamping",
      "Layered Defense"
    ]
  },
  {
    numb: 104,
    question: "What is the main purpose of a firewall?",
    answer: "To monitor and control incoming and outgoing network traffic",
    options: [
      "To monitor and control incoming and outgoing network traffic",
      "To encrypt sensitive data",
      "To detect malicious software",
      "To block unauthorized access to a computer system"
    ]
  },
  {
    numb: 105,
    question: "What is a key benefit of implementing multi-factor authentication?",
    answer: "It provides an additional layer of security beyond just a password",
    options: [
      "It speeds up the login process",
      "It provides an additional layer of security beyond just a password",
      "It eliminates the need for encryption",
      "It reduces the risk of phishing attacks"
    ]
  },
  {
    numb: 106,
    question: "Which of the following best describes the concept of defense in depth?",
    answer: "Layering multiple security measures to protect information",
    options: [
      "Layering multiple security measures to protect information",
      "Using a single method to prevent all attacks",
      "Providing access based on user roles",
      "Securing only the most sensitive data"
    ]
  },
  {
    numb: 107,
    question: "What is the primary purpose of an incident response plan?",
    answer: "To ensure a structured and coordinated response to security incidents",
    options: [
      "To ensure a structured and coordinated response to security incidents",
      "To prevent all security incidents from occurring",
      "To monitor network traffic for potential incidents",
      "To provide an audit trail of user activities"
    ]
  },
  {
    numb: 108,
    question: "Which of the following is a common type of network attack?",
    answer: "Denial of Service (DoS) attack",
    options: [
      "Denial of Service (DoS) attack",
      "Data backup",
      "User authentication",
      "Access control"
    ]
  },
  {
    numb: 109,
    question: "What is the purpose of hashing in information security?",
    answer: "To ensure data integrity by generating a fixed-length representation of data",
    options: [
      "To ensure data integrity by generating a fixed-length representation of data",
      "To encrypt data for confidentiality",
      "To control access to data",
      "To generate a secure password"
    ]
  },
  {
    numb: 110,
    question: "What is the most important factor in securing data in transit?",
    answer: "Encryption",
    options: [
      "Encryption",
      "Firewall protection",
      "Access control lists",
      "Tokenization"
    ]
  },
  {
    numb: 111,
    question: "Which of the following best describes a Distributed Denial of Service (DDoS) attack?",
    answer: "An attack that floods a system with excessive requests to disrupt its service",
    options: [
      "An attack that floods a system with excessive requests to disrupt its service",
      "An attack that steals sensitive data from a system",
      "An attack that manipulates a system’s configuration to gain unauthorized access",
      "An attack that installs malware on a system"
    ]
  },
  {
    numb: 112,
    question: "Which of the following is the first step in the incident response process?",
    answer: "Identification of the incident",
    options: [
      "Identification of the incident",
      "Containment of the incident",
      "Eradication of the incident",
      "Recovery from the incident"
    ]
  },
  {
    numb: 113,
    question: "Which of the following is a method for improving password security?",
    answer: "Implementing password complexity requirements",
    options: [
      "Implementing password complexity requirements",
      "Using simple passwords",
      "Allowing password sharing",
      "Using passwords with a long expiration time"
    ]
  },
  {
    numb: 114,
    question: "What is the primary benefit of using encryption to protect sensitive data?",
    answer: "It ensures the confidentiality of data",
    options: [
      "It ensures the confidentiality of data",
      "It ensures the availability of data",
      "It ensures data integrity",
      "It ensures non-repudiation"
    ]
  },
  {
    numb: 115,
    question: "Which of the following best describes an access control list (ACL)?",
    answer: "A set of rules used to define what users or systems can access network resources",
    options: [
      "A set of rules used to define what users or systems can access network resources",
      "A list of sensitive data that needs to be encrypted",
      "A report of user activities on the network",
      "A record of all failed login attempts"
    ]
  },
  {
    numb: 116,
    question: "What is the primary purpose of vulnerability scanning?",
    answer: "To identify and assess security weaknesses in a system",
    options: [
      "To identify and assess security weaknesses in a system",
      "To monitor network traffic for suspicious activity",
      "To test the effectiveness of firewalls",
      "To verify compliance with security policies"
    ]
  },
  {
    numb: 117,
    question: "What is a common method used to secure data stored in databases?",
    answer: "Encryption",
    options: [
      "Encryption",
      "Tokenization",
      "Data compression",
      "File permissions"
    ]
  },
  {
    numb: 118,
    question: "Which of the following is the primary goal of security testing?",
    answer: "To identify vulnerabilities and weaknesses in a system",
    options: [
      "To identify vulnerabilities and weaknesses in a system",
      "To ensure compliance with regulations",
      "To prevent data breaches",
      "To improve system performance"
    ]
  },
  {
    numb: 119,
    question: "What is the purpose of an antivirus program?",
    answer: "To detect and remove malicious software from a system",
    options: [
      "To detect and remove malicious software from a system",
      "To prevent unauthorized access to a network",
      "To monitor network traffic for suspicious activity",
      "To encrypt sensitive data"
    ]
  },
  {
    numb: 120,
    question: "Which of the following is the primary purpose of patch management?",
    answer: "To ensure that systems are updated with the latest security fixes",
    options: [
      "To ensure that systems are updated with the latest security fixes",
      "To monitor system performance",
      "To track software usage",
      "To control user access to systems"
    ]
  },
  {
    numb: 121,
    question: "Which of the following is an example of an administrative control in security?",
    answer: "User access policies",
    options: [
      "User access policies",
      "Firewall configurations",
      "Antivirus software",
      "Data encryption"
    ]
  },
  {
    numb: 122,
    question: "What is the primary goal of a penetration test?",
    answer: "To identify vulnerabilities by simulating an attack",
    options: [
      "To identify vulnerabilities by simulating an attack",
      "To monitor network traffic for suspicious activity",
      "To ensure compliance with regulations",
      "To evaluate the effectiveness of firewalls"
    ]
  },
  {
    numb: 123,
    question: "What is the function of an Intrusion Detection System (IDS)?",
    answer: "To monitor network traffic for signs of suspicious activity",
    options: [
      "To monitor network traffic for signs of suspicious activity",
      "To prevent unauthorized access to systems",
      "To encrypt sensitive data",
      "To authenticate users"
    ]
  },
  {
    numb: 124,
    question: "What is the purpose of a disaster recovery plan?",
    answer: "To ensure the continuity of operations in the event of a disaster",
    options: [
      "To ensure the continuity of operations in the event of a disaster",
      "To monitor system health and performance",
      "To manage user accounts",
      "To detect and remove malware"
    ]
  },
  {
    numb: 125,
    question: "Which of the following is a major threat to cloud security?",
    answer: "Data breaches",
    options: [
      "Data breaches",
      "Firewall misconfigurations",
      "Lack of compliance",
      "Denial of Service attacks"
    ]
  },
  {
    numb: 126,
    question: "Which of the following is the best way to secure data stored on a mobile device?",
    answer: "Encryption",
    options: [
      "Encryption",
      "Password protection",
      "Remote wipe",
      "Biometric authentication"
    ]
  },
  {
    numb: 127,
    question: "What is the primary purpose of a security incident report?",
    answer: "To document the details of a security breach or incident",
    options: [
      "To document the details of a security breach or incident",
      "To improve security policy",
      "To notify management of a breach",
      "To prevent future attacks"
    ]
  },
  {
    numb: 128,
    question: "What is the best approach to mitigating the risk of unauthorized access to sensitive data?",
    answer: "Access control policies",
    options: [
      "Access control policies",
      "Data encryption",
      "Firewalls",
      "Data classification"
    ]
  },
  {
    numb: 129,
    question: "Which of the following best describes the concept of a zero-trust security model?",
    answer: "Trust no one, and verify every access request",
    options: [
      "Trust no one, and verify every access request",
      "Only allow trusted insiders to access sensitive data",
      "Only allow external devices to access the network",
      "Assume everything inside the network is trusted"
    ]
  },
  {
    numb: 130,
    question: "Which of the following is a common example of physical security?",
    answer: "Biometric authentication",
    options: [
      "Biometric authentication",
      "Data encryption",
      "Password protection",
      "Firewalls"
    ]
  },
  {
    numb: 131,
    question: "What is the primary benefit of intrusion prevention systems (IPS)?",
    answer: "They block malicious traffic before it reaches the target system",
    options: [
      "They block malicious traffic before it reaches the target system",
      "They monitor for suspicious activities and alert administrators",
      "They log network traffic for auditing purposes",
      "They provide real-time data encryption"
    ]
  },
  {
    numb: 132,
    question: "What type of attack involves attempting to access a system by submitting fake credentials?",
    answer: "Brute force attack",
    options: [
      "Phishing attack",
      "Brute force attack",
      "Man-in-the-middle attack",
      "Cross-site scripting (XSS)"
    ]
  },
  {
    numb: 133,
    question: "What is the main purpose of using security information and event management (SIEM) systems?",
    answer: "To aggregate and analyze security event data from multiple sources",
    options: [
      "To aggregate and analyze security event data from multiple sources",
      "To block malicious traffic",
      "To identify vulnerabilities in the system",
      "To store sensitive data securely"
    ]
  },
  {
    numb: 134,
    question: "Which of the following is a type of malware designed to collect sensitive data from a victim’s computer?",
    answer: "Spyware",
    options: [
      "Spyware",
      "Ransomware",
      "Virus",
      "Worm"
    ]
  },
  {
    numb: 135,
    question: "What does the principle of least privilege refer to?",
    answer: "Granting users only the minimum level of access necessary to perform their tasks",
    options: [
      "Granting users only the minimum level of access necessary to perform their tasks",
      "Allowing users unrestricted access to all network resources",
      "Using default system settings for all users",
      "Allowing users to elevate their privileges when needed"
    ]
  },
  {
    numb: 136,
    question: "Which of the following is a method of data loss prevention?",
    answer: "Monitoring and controlling access to sensitive data",
    options: [
      "Monitoring and controlling access to sensitive data",
      "Encryption of stored data",
      "Regularly backing up data",
      "Ensuring proper password management"
    ]
  },
  {
    numb: 137,
    question: "What is the purpose of data masking?",
    answer: "To obfuscate sensitive information while preserving its usability",
    options: [
      "To obfuscate sensitive information while preserving its usability",
      "To ensure data integrity",
      "To back up data",
      "To encrypt sensitive data"
    ]
  },
  {
    numb: 138,
    question: "Which of the following is a common reason for implementing disaster recovery planning?",
    answer: "To ensure business continuity in the event of a disaster",
    options: [
      "To ensure business continuity in the event of a disaster",
      "To improve data throughput",
      "To monitor system performance",
      "To reduce the risk of data breaches"
    ]
  },
  {
    numb: 139,
    question: "Which of the following is a method used to reduce the impact of a denial-of-service (DoS) attack?",
    answer: "Rate limiting",
    options: [
      "Rate limiting",
      "Data encryption",
      "Password policies",
      "Firewall rules"
    ]
  },
  {
    numb: 140,
    question: "Which of the following is a key feature of secure coding practices?",
    answer: "Input validation",
    options: [
      "Input validation",
      "User authentication",
      "Network monitoring",
      "Encryption"
    ]
  },
  {
    numb: 141,
    question: "Which of the following is the primary function of a network firewall?",
    answer: "To filter incoming and outgoing network traffic based on security rules",
    options: [
      "To filter incoming and outgoing network traffic based on security rules",
      "To monitor network activity",
      "To encrypt sensitive data",
      "To block malicious websites"
    ]
  },
  {
    numb: 142,
    question: "Which of the following types of malware is specifically designed to extort money from victims?",
    answer: "Ransomware",
    options: [
      "Ransomware",
      "Spyware",
      "Trojan horse",
      "Worm"
    ]
  },
  {
    numb: 143,
    question: "Which of the following best describes a zero-day vulnerability?",
    answer: "A vulnerability that is unknown to the software vendor and has no patch available",
    options: [
      "A vulnerability that is unknown to the software vendor and has no patch available",
      "A vulnerability that is patched by the vendor but has not yet been exploited",
      "A vulnerability that can be exploited only after a patch is released",
      "A vulnerability that has been publicly disclosed but is not yet patched"
    ]
  },
  {
    numb: 144,
    question: "What is the best way to secure a wireless network?",
    answer: "Using WPA3 encryption",
    options: [
      "Using WPA3 encryption",
      "Using WEP encryption",
      "Disabling SSID broadcasting",
      "Changing the default router password"
    ]
  },
  {
    numb: 145,
    question: "Which of the following is a fundamental principle of information security?",
    answer: "Confidentiality, integrity, and availability",
    options: [
      "Confidentiality, integrity, and availability",
      "Authorization, auditing, and accountability",
      "Privacy, protection, and monitoring",
      "Encryption, authentication, and authorization"
    ]
  },
  {
    numb: 146,
    question: "What is the primary purpose of network segmentation?",
    answer: "To separate and isolate traffic to reduce the impact of a security breach",
    options: [
      "To separate and isolate traffic to reduce the impact of a security breach",
      "To improve network performance",
      "To simplify network management",
      "To ensure compliance with regulatory standards"
    ]
  },
  {
    numb: 147,
    question: "Which of the following is the best defense against phishing attacks?",
    answer: "User education and awareness training",
    options: [
      "User education and awareness training",
      "Spam filtering",
      "Strong authentication",
      "Firewalls"
    ]
  },
  {
    numb: 148,
    question: "Which of the following best describes the concept of principle of least privilege?",
    answer: "Granting users only the minimum level of access necessary to perform their tasks",
    options: [
      "Granting users only the minimum level of access necessary to perform their tasks",
      "Allowing users to elevate their privileges when needed",
      "Providing all users with administrator access",
      "Ensuring that all access is unrestricted"
    ]
  },
  {
    numb: 149,
    question: "What is the purpose of a penetration test?",
    answer: "To identify vulnerabilities by simulating real-world attacks",
    options: [
      "To identify vulnerabilities by simulating real-world attacks",
      "To perform routine system checks",
      "To monitor for signs of data breaches",
      "To evaluate employee security awareness"
    ]
  },
  {
    numb: 150,
    question: "Which of the following is an example of a physical security control?",
    answer: "Access control systems",
    options: [
      "Access control systems",
      "Encryption",
      "Firewalls",
      "Antivirus software"
    ]
  },
  {
    numb: 151,
    question: "What is the most effective method to prevent SQL injection attacks?",
    answer: "Input validation and parameterized queries",
    options: [
      "Input validation and parameterized queries",
      "Regular software updates",
      "Firewall configuration",
      "User authentication"
    ]
  },
  {
    numb: 152,
    question: "What is a key benefit of using Virtual Private Networks (VPNs)?",
    answer: "To secure internet traffic and protect data privacy",
    options: [
      "To secure internet traffic and protect data privacy",
      "To monitor network activity",
      "To speed up internet connections",
      "To allow unrestricted access to content"
    ]
  },
  {
    numb: 153,
    question: "Which of the following is the most common type of attack that exploits weak or stolen passwords?",
    answer: "Brute force attack",
    options: [
      "Brute force attack",
      "Phishing attack",
      "Man-in-the-middle attack",
      "Denial of Service (DoS) attack"
    ]
  },
  {
    numb: 154,
    question: "What is the most effective method for securing email communications?",
    answer: "Email encryption",
    options: [
      "Email encryption",
      "Strong passwords",
      "Firewalls",
      "Regular updates"
    ]
  },
  {
    numb: 155,
    question: "Which of the following is the first step in a disaster recovery plan?",
    answer: "Identify critical systems and data",
    options: [
      "Identify critical systems and data",
      "Create a communication plan",
      "Test the recovery process",
      "Create data backup schedules"
    ]
  },
  {
    numb: 156,
    question: "Which of the following is an example of an administrative control in information security?",
    answer: "User access management policies",
    options: [
      "User access management policies",
      "Antivirus software",
      "Encryption",
      "Firewalls"
    ]
  },
  {
    numb: 157,
    question: "What is the purpose of data masking?",
    answer: "To obfuscate sensitive data while retaining its usability",
    options: [
      "To obfuscate sensitive data while retaining its usability",
      "To encrypt sensitive data",
      "To backup data securely",
      "To prevent unauthorized data access"
    ]
  },
  {
    numb: 158,
    question: "Which of the following is the primary goal of vulnerability management?",
    answer: "To identify and remediate security weaknesses in a system",
    options: [
      "To identify and remediate security weaknesses in a system",
      "To monitor network traffic for anomalies",
      "To prevent unauthorized access to systems",
      "To implement encryption on sensitive data"
    ]
  },
  {
    numb: 159,
    question: "What is the purpose of a security audit?",
    answer: "To evaluate the effectiveness of security controls and policies",
    options: [
      "To evaluate the effectiveness of security controls and policies",
      "To identify vulnerabilities in a system",
      "To test the response time of systems",
      "To update security configurations"
    ]
  },
  {
    numb: 160,
    question: "What is the purpose of multi-factor authentication (MFA)?",
    answer: "To add an extra layer of security by requiring more than one form of identification",
    options: [
      "To add an extra layer of security by requiring more than one form of identification",
      "To simplify the login process",
      "To allow unlimited login attempts",
      "To reduce the cost of password management"
    ]
  },
  {
    numb: 161,
    question: "Which of the following is a method used to secure data in storage?",
    answer: "Encryption",
    options: [
      "Encryption",
      "Tokenization",
      "Firewalls",
      "User authentication"
    ]
  },
  {
    numb: 162,
    question: "What is the purpose of intrusion detection systems (IDS)?",
    answer: "To monitor network traffic for signs of suspicious activity",
    options: [
      "To monitor network traffic for signs of suspicious activity",
      "To block unauthorized access",
      "To encrypt data in transit",
      "To prevent DDoS attacks"
    ]
  },
  {
    numb: 163,
    question: "What is a common defense against phishing attacks?",
    answer: "User training and awareness",
    options: [
      "User training and awareness",
      "Email encryption",
      "VPN usage",
      "Password complexity policies"
    ]
  },
  {
    numb: 164,
    question: "What is the primary purpose of a backup strategy?",
    answer: "To ensure data recovery in case of a system failure or disaster",
    options: [
      "To ensure data recovery in case of a system failure or disaster",
      "To prevent unauthorized data access",
      "To improve system performance",
      "To enhance data encryption"
    ]
  },
  {
    numb: 165,
    question: "Which of the following is an example of a risk management practice?",
    answer: "Performing a risk assessment",
    options: [
      "Performing a risk assessment",
      "Blocking malicious traffic",
      "Encrypting data",
      "Implementing access controls"
    ]
  },
  {
    numb: 166,
    question: "What is the most effective way to prevent unauthorized access to critical infrastructure?",
    answer: "Physical security controls",
    options: [
      "Physical security controls",
      "User authentication",
      "Firewalls",
      "Intrusion detection systems"
    ]
  },
  {
    numb: 167,
    question: "Which of the following is an example of an audit control?",
    answer: "Log management",
    options: [
      "Log management",
      "Firewall configuration",
      "User authentication",
      "Encryption"
    ]
  },
  {
    numb: 168,
    question: "What is the purpose of tokenization in information security?",
    answer: "To replace sensitive data with non-sensitive placeholders",
    options: [
      "To replace sensitive data with non-sensitive placeholders",
      "To encrypt data",
      "To monitor network traffic",
      "To perform data backups"
    ]
  },
  {
    numb: 169,
    question: "Which of the following is an example of a physical security control?",
    answer: "Access control systems",
    options: [
      "Access control systems",
      "Encryption",
      "Firewalls",
      "Antivirus software"
    ]
  },
  {
    numb: 170,
    question: "What is the first step in the incident response lifecycle?",
    answer: "Identification",
    options: [
      "Identification",
      "Containment",
      "Eradication",
      "Recovery"
    ]
  }
];


