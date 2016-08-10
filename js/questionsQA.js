var QUESTIONS = [
	{
		'id' : 1,
		'text' : "When did you first start using a computer? What sort of help did you have when you first used a computer?",
		'hint' : "Manual QA testing is a unique job in the sense that it requires the tester to not only have strong domain knowledge, but also be intimately familiar with computers. Hackers who grew up with computers will generally outperform engineers who started using computers only in their late teens or college. This is the reason why many developers like to ask the interviewee questions about his or her computer usage habits. The assumption is that the earlier you started using a computer (and the less help you had in using it), the better practical understanding you would have of how computers actually work. After all, anybody can get a degree from a college; only a few have the experience and the passion to be standout testers."
	},
	{
		'id' : 2,
		'text' : "What are your hobbies and interests?",
		'hint' : "<p>A. Yet another question that has nothing to do with testing, but keeps popping up in virtually every interview. One of the key principles of the school of Context Driven Testing that has increased in popularity with some recruiters recently is that your hobbies and skills are transferable qualities that affect how you work. Put simply, the modern organization does not merely want someone who can test out applications; it wants people who are passionate about software, computers and how systems work in general.</p><p>Hobbies and interests, therefore, become a way to know about what really interests and motivates you.</p><p>As you can imagine, there is no ‘right’ answer to this question. What the interviewer is really looking for is the passion and depth of knowledge you show for your hobby. It also helps to have hobbies that involve working with complex systems. This course on succeeding in interviews will give you just the right pointers on how to talk about anything – including your hobbies and interests.</p>"
	},
	{
		'id' : 3,
		'text' : "How would you define a ‘good tester’?",
		'hint' : "Good testers are people who have an inherent knack for taking things apart. They are natural tinkerers and hackers who will find all possible ways to break apart any software. A good tester will find hundreds of test cases for testing a simple electronic device (like a microwave oven). Good testers also have the ability to work in a team and communicate freely and frequently with the developers."
	},
	{
		'id' : 4,
		'text' : "Can you act like an inexperienced user?",
		'hint' : "This rather tricky question is one of the favorites among developers simply because so many QA testers slip up on it. Since the job of the tester is to find errors and bugs in the program, being able to work and think like an inexperienced user is a huge bonus. But any competent QA tester is so used to working with technology that he cannot be reasonably to expected to think like a beginner. So when you get a question like this, don’t answer with an emphatic “yes!”. Instead, say that while you can’t think like an inexperienced user, you can definitely write test plans to approximate such a user."
	},
	{
		'id' : 5,
		'text' : "What is your process for QA testing? OR What was the process for QA testing in the last company you worked with?",
		'hint' : "QA testing is the process of following processes. Great testers are anything but not methodical. When an interviewer asks you this question, he expects you to tell him or her – in detail – the process you follow(ed) when testing software. A sample answer would run the interviewer through the entire software development process – from the creation of the business requirement document to the development of the test plan and the actual testing (both manual and automatic)."
	},
	{
		'id' : 6,
		'text' : "How would you define a ‘Test Plan’? What all should a test plan contain?",
		'hint' : "<p>A test plan is the road map according to which all QA testers must work. It is a high level document that explains in detail, the testing strategy, expected delivery time, and the type of resources available to the tester.</p><p>Most test plans can be broken down into the following constituents: a. Objectives of the test b. Strategy adopted to fulfill the test requirements c. Resources available to complete the test d. Entry criteria e. Exit criteria f. What must be tested/what must be skipped g. Risks involved in the testing process, and how can they be circumvented.</p>"
	},
	{
		'id' : 7,
		'text' : "Explain the difference between Retesting and Data Driven Testing?",
		'hint' : "Retesting is the process of testing any software application before bug fixes, changes and enhancements. It is done manually and thus, is more time consuming (but also more insightful) than Data Driven Testing. Data Driven Testing, also called DDT, describes an automated testing process wherein multiple data sets are used to test a feature."
	},
	{
		'id' : 8,
		'text' : "How would you write a good bug report OR What all must you tell the developer to fix a bug?",
		'hint' : "<p>Never underestimate the value of good communication skills. Generating bug reports is a huge part of any tester’s job. Being able to create concise, easily readable bug reports is essential to success as a QA tester. Any good bug report should have at least all the following components:</p><p>Summary: As obvious, the summary should give the programmer at-a-glance description of the bug. It should be descriptive without being verbose. As with wit, brevity is the soul of summaries as well!</p><p>Priority: How important is the bug? Does it break the application or only cause a specific feature to not function as expected? This component will tell the developers how fast the bug should be rectified.</p><p>Affected Versions: What versions of the software carry the bug in question? The report should list all current and previous versions in which the bug is found.</p><p>Operating Environment: Some bugs pop up only when the software is run on certain operating systems, browsers or computer-types. This component should list all relevant details about the operating environment, including browser, OS, and hardware specs.</p><p>Reproduction: This field should tell the reader about the frequency of the bug and how can it be reproduced. It should also include a list of steps that can be taken to reproduce the bug.</p>"
	},
	{
		'id' : 9,
		'text' : "What is baseline testing?",
		'hint' : "Baseline testing is the process of running a set of tests to capture performance information. Baseline testing use the information collected to made the changes in the application to improve performance and capabilities of the application. Baseline compares present performance of application with its own previous performance."
	},
 	{
		'id' : 10,
		'text' : "http://qaquestions.net/",
		'hint' : "http://qaquestions.net/"
	},
	{
		'id' : 11,
		'text' : "You say that you work very well with developers to solve problems. How would you handle dealing with an extremely difficult engineer who won't acknowledge possible issues with his code and often won't speak with QA at all?",
		'hint' : "<p>1. Form a relationship by discussing work when there are no issues. 2. Acknowledge the difficulty and frustrations of the work. Find out what he/she wishes they could change and what would make their lives easier. 3. Ask if you can help in any way? 4. Ask him/her for help which allows them to show off their knowledge. Be appreciative, impressed and thankful. 5. Help them see how you can make them look good by eradicating bugs before customers and management ever see them. 6. Reinforce good behavior. 7. Make #2 happen if you can. Interviewers seemed to like the answer but were very doubtful any of that would ever work with the person they had in mind!</p><p>Standards and QA must be everywhere in our life. So, there should be nothing personal. We all work for business. If QA finds that product's feature does not work as it supposed to, then QA Engineer must report it into a bug tracking system. Manager must assign this bug to SW Engieneer which is already a job task that must be done in timely manner.</p>"
	},
	{
		'id' : 12,
		'text' : "How would you test a toaster?",
		'hint' : "<p>Another staple of QA testing interviews, this question is designed to see how you approach a problem. The interviewer might replace toaster with any device – blender, microwave oven, food processor, etc. The answer should follow the same process with only a change in the relevant details.</p><p>A sample answer would consider the following:</p><p>a. External features (i.e. the UI) of the device such as color, design, power cable, odor, etc.</p><p>b. External indicators such as LED/power light, switch condition, etc.</p><p>c. Condition of equipment.</p><p>d. Functional aspects of the device. In the case of the toaster, this should be a long, methodical process that will involve running an empty toaster, checking for quality of toast at different settings, checking for performance after significant load, checking with different types of bread at variable voltage, checking for performance when toaster is run on battery backup, etc.</p>"
	},
	{
		'id' : 13,
		'text' : "How much do you know our product?",
		'hint' : ""
	},
	{
		'id' : 14,
		'text' : "What is Selenium?",
		'hint' : "Selenium automates browsers. That's it! What you do with that power is entirely up to you. Primarily, it is for automating web applications for testing purposes, but is certainly not limited to just that. Boring web-based administration tasks can (and should!) also be automated as well."
	},
	{
		'id' : 15,
		'text' : "How would you deal with disagreement in software being ready for production release.",
		'hint' : "Assert the facts as I see them; look for consensus amongst the team; secure final decision from product manager. Communicate known issues with customers."
	},
	{
		'id' : 16,
		'text' : "What kind of document you think is a good one?",
		'hint' : "Clear and logical."
	},
	{
		'id' : 17,
		'text' : "What is the difference between priority and severity? Give examples of each.",
		'hint' : "Severity defines the extent of the damage caused by a defect, while priority defines the order in which the defect should be solved. A problem that causes the entire application to crash when a user performs a very rare sequence of steps has high severity (since the app crashes altogether), but low priority (since the defect is accessible to very few users). On the other hand, a defect that causes a specific, scarcely used function to become non-usable when a user performs a common action has low severity (only a part of the application stops working) but high priority (it’s affecting a large number of users)."
	},
	{
		'id' : 18,
		'text' : "What is the role of documentation in QA?",
		'hint' : "Documentation plays a critical role in QA. QA practices should be documented, so that they are repeatable. Specifications, designs, business rules, inspection reports, configurations, code changes, test plans, test cases, bug reports, user manuals should all be documented. Ideally, there should be a system for easily finding and obtaining of documents and determining what document will have a particular piece of information. Use documentation change management, if possible."
	},
	{
		'id' : 19,
		'text' : "What is the Software Development Life Cycle?",
		'hint' : "The systems (or software) development life cycle (SDLC) is a conceptual model used in project management that describes the stages involved in an information system development project, from an initial feasibility study through maintenance of the completed application. It includes the following different stages: 1. Requirement phase 2. Design phase 3. Coding (programming) 4. Testing 5. Release (Production) 6. Maintenance (Support)"
	}
]