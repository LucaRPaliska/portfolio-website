---
title: '"Software Engineering is Dead"'
date: 2026-07-3
---

* ["in 12 months, we may be in a world where AI is writing essentially all of the code,"](https://www.businessinsider.com/anthropic-ceo-ai-90-percent-code-3-to-6-months-2025-3)
	- *CEO of Anthropic, March **2025***
* ["There will be no programmers in 5 years"](https://www.developer-tech.com/news/stability-ai-ceo-replace-human-coders-five-years/)
	- *CEO of Stability AI, July **2023***
* ["Elon Musk also told its staff that xAI can achieve AGI as early as 2026, citing rapid progress with its Grok models."](https://timesofindia.indiatimes.com/technology/tech-news/elon-musk-tells-xai-staff-agi-could-arrive-by-2026-says-next-23-years-are-critical/articleshow/126052650.cms)
	- *CEO of xAI, December **2025***
* ["OpenAI says it's not releasing its code to the public because its researchers are scared it could be misused, "](https://www.weforum.org/stories/2019/02/amazing-new-ai-churns-out-coherent-paragraphs-of-text/#:~:text=ClosedAI,people%2C%20or%20other%20shady%20things.)
	- *OpenAI on GPT-2, February **2019***

---
## Not Yet

**No, it's not dead.**

I **do** believe the traditional skill-set of a software engineer is shifting rapidly, but the idea it is dead is absurd to me. It takes a very shallow understanding of computer science history to know that the idea of programmers being replaceable has come time and time again, and their demand has only grown. But unlike before, I believe this sentiment is being fueled by a myriad of factors surrounding the capabilities of AI *outside* the domain of SWE. In this blog, I intend to share my brief thoughts on the matter and how I feel the economy, company politics, and the apprehension of AGI are influencing this belief.

---
## Young and Stupid

The advent of LLMs has flipped the entire world upside down, and the space I've felt it the most is in university. Computer science curriculums are and always have been about a decade behind the practical skills required in the industry[^1]. AI—and today's pace of tech for that matter—has only magnified this problem. The distribution of students independently learning new skills versus coasting through classes has never been so polarized. With any new tool, it can be used to either propel your learning or stagnate it.

What could be done five years ago by hiring a few fresh-grad monkeys can now be done by claude in a few hours. Knowing some syntax and a few algorithms won't cut it anymore for a junior dev hoping to be a competitive hire. What I believe *will* be competitive is the knowledge behind the code: Should our codebase use strict or dynamic type checking? What libraries should we incorporate to reduce technical debt? How might this framework impact our development speed in two years time? Should we use a different programming paradigm? SQL or NoSQL? Should our team using TDD? React because of it's server components or because an LLM arbitrarily said so? I feel the skills of a software architect are becoming increasingly paramount for any SWE position thanks to the new-found power of AI. It's these questions that will determine how qualified an engineer is, or you might end up with a Ruby on Rails blog that's over [***300,000 lines of code...***](https://www.fastcompany.com/91520702/y-combinator-garry-tan-agentic-ai-social-media)

As a student, I've found my own balance. I exclusively use agents with libraries I'm familiar with. A simple web-scraping pipeline is trivial and can be slapped together in half an hour—why spend the time doing it by hand when I've done countless times before. This principle is indespensible in hackathons which are by nature limited in scope and time-sensitive. On the contrary, when I'm exploring entirely new territory I use a bare-bones text editor and dive into documentation. At least currently, hand-holding an agent can only get me so far without the detailed knowledge behind an API or niche system.

But by far the best advice I've come across to enhance my learning while keeping pace with the times, is to not outsource the thinking. To me, prompting segments of code at a time rather than entire pipelines has been the most fruitful use of AI thus far. Sure, it's not as fast as prompting, but to be blunt, I feel anyone that tells me they are learning to program without ever touching a line of code is lying to themselves. They will only ever be as good as the tool they are using.

 Beside how the bar for SWE has shifted for students, how is AI shifting the industry as a whole?

[^1]: *With the exception of special topics courses, shout out to Professor Stanford and Professor Huang for their Software Correctness and Large Foundational Model courses respectively.*

---
## Ridiculously Incredible <u>Tools</u>

I want to be clear: I think LLMs are **incredible.** Writing code has never been as accessible to the general public than it is today. Demystifying complex repos is trivial with an agent wielding an LSP. Your own personalized tutor, search-engine, document manager, or secretary, is at the reach of your fingertips. Writing code line by line, character by character, has been trivialized. Prototypes that would have taken weeks to see through now take days. The pace of software development has all but quadrupled—but with greater power, comes greater responsibility. To me, their unsupervised use on codebases large enough to surpass context windows reveals the line between intelligence and tool; Tools capable of producing [thousands of lines](https://the-decoder.com/amazon-makes-senior-engineers-the-human-filter-for-ai-generated-code-after-a-series-of-outages/) of code that will impact performance, security, and success over the long, *long* run.

The argument everywhere generally is: AI will improve. Performance trade-offs will diminish with each new model. As these tools improve, so will their ability to detect bugs, fuzz for CVEs, or even find [RCE vulnerabilities](https://thehackernews.com/2026/04/anthropics-claude-mythos-finds.html)\*\*. With reasoning capabilities improving dramatically over the past few years and novel pipelines being developed monthly, these models *are* able to better understand organization-sized codebases. Solutions range from making vast agentic pipelines, to RAG-based approaches leveraging semantic graphs, to repo-wide monte carlo search trees. But these are all answers with the same strategy at their core: [throw more compute](https://www.businessinsider.com/jensen-huang-500k-engineers-250k-ai-tokens-nvidia-compute-2026-3?op=1). Maybe this works, but how much [does it cost?](https://www.tomshardware.com/tech-industry/artificial-intelligence/openclaw-creator-burns-through-1-3-million-in-openai-api-tokens-in-a-single-month)

And so, here we are today. Engineers are [burning through tokens](https://blog.pragmaticengineer.com/the-pulse-tokenmaxxing-as-a-weird-new-trend/) to meet minimum quotas or climb AI motivated leaderboards. Agent usage is egregiously encouraged while a stick of RAM is worth it's weight in gold. But companies are beginning to feel the weight of tokens on their wallets. As executives debate the cost of engineers versus enterprise API costs, they face new technical debt and a loss of tribal knowledge built from years of loyalty; A fact we're beginning to see [the effects of...](https://www.inc.com/bruce-crumley/new-report-says-ai-layoffs-are-backfiring-and-half-of-companies-will-start-rehiring/91297210)

---
## The Money Machine

Up until the mid 2010s, AI was rather niche outside of academia and major tech companies. Advancements in computer vision and speech recognition began shifting it into the forefront, but 2016 was a time of crypto and self-driving cars, not language models. Google's introduction of the transfomer model is what ultimately sparked the great shift across the entire industry.

In 2020, OpenAI demonstrated that LM performance follows predictable scaling laws. With this, a simple formula was born that rippled across the AI scene: More compute guarentees more performance. **More money in, better models out.** In a never before seen way, investor capital could reasonably estimate model performance. After this hidden race began, it did not take long for the small, non-profit, opensource company to build ChatGPT and begin it's transition into the collosus it is today.

In the years that followed, Silicon Valley realized that just as Google came to dominate the search market, a company could come to do the same in AI—a technology with far greater potential. And no venture capitalist wants to miss out on the next Google.

With this context, it becomes obvious to me that consumer needs aren't as lucrative as investor interest. The capital required to produce ever stronger models is growing exponentially, and theres plenty of reason to believe that the current models' inference costs outweigh profits. So it's in companies' direct incentive to push the mantra that "AI *will* replace everything." Preaching anything else undermines a company's prospects, or even worse, sends potential investors to louder competitors.

Every other part of the market is leveraging the absolute runway of hype to their advantage too. Companies are jumping on the oppurtunity to justify layoffs with AI following the hiring spike after COVID. Any company that doesn't [will fall](https://www.-ceo-says-companys-17percent-workforce-cut-had-nothing-to-do-with-ai.html). These are natural parts of business cycles, but has the byproduct of fueling the idea that AI is taking jobs. Layoffs, the incessant media push, and investment driven narratives are *all* contributing to the deeply negative sentiment surrounding software engineering as a career. People fear AI will take their jobs because that consensus favors executives, investors, and the general market *at this time*.

---
## So What's Next... AGI?

It's hard to say. These tools are evolving at a rapid pace. I would have rarely used a chatbot to program anything meaningful a few years ago, but now use agents daily. With each passing month, I am forced to reconsider my views as people discover new ways to utilize this transformative technology. At the moment, we're pivoting from model improvement to agent development. Beyond the obvious impact to programming, tools like openclaw have given everyone the oppurtunity to create their own personal assistant. I've also explored using agents in day to day life like this; a topic I plan to discuss another time.

The emergence of general intelligence—that is, a model capable of learning *entirely* unsupervised—is a mystery. Nobody knows. Anyone who says they do is bullshitting. But I firmly believe it will appear from nowhere: an academic lab, a startup, or even a garage.

I believe that achieving a new height of intelligence will require a fundamental shift from the feed-forward approach embedded in models today, and I feel this will become more obvious once we exhaust the optimizations available within transformer-based architectures. This shift in thinking can only happen by moving away from what's working and taking that risk—a risk that rich, profit-incentivized companies can't afford.

I'm particularly fascinated by the onset of research into multimodal systems and new approaches to learning spatial representations of the world. World models have taken the robotics industry by storm as the field looks to emulate the same data-driven success that followed LLMs. I am especially interested in these directions because they explore outside the realm of improving existing architectures, and into the bright development of the new.

---
## Not Dead

So no, I don't believe software engineering is dead. Quite the contrary, I feel as AI finds it's footing in companies as a common place tool rather than a novel facination, it will introduce a new abstraction layer in much the same way the compiler did. The methodologies behind software engineering will change, but the underlying structure will become ever more important. I feel a little envious of today's engineers, as they can combine their years of knowledge writing code line by line with the intense acceleration of coding agents. Despite the industry's anxieties, I feel the coming years will be a bright new age for software engineers.

Obviously, this blog is rather biased, but that's because I feel the day software engineering is replaceable is the day human-level thinking is achieved—meaning virtually *every* job will be replaceable. Many people are claiming that software engineering is being replaced by LLMs the same way computers—the line of work, not the machine—were replaced by the calculator. But the difference is the original job position of a computer was *solely* to do calculations. AI might be *writing* the code, but it is not *driving* it. To say software engineering is dead implies that someone's ability to code was the only reason to hire them. That's a statement I fundamentally disagree with.

If you've read this far, feel free to reach out and share your thoughts, opinions, or disagreements. I'm more than eager to shift my views in light of novel ideas. I believe that principle is foundational to being a good engineer.

```
	"Let's say that one day someone does invent a truly useful diagrammatic language. It won't be architects drawing those diagrams, it will be programmers. The diagrams will simply become the new code, and programmers will be needed to draw that code because, in the end, it's all about detail, and it is programmers who manage that detail."
	
	— Robert C. Martin on model-driven architecture, Clean Coder, 2011
```

Kind regards,
Luca


  
  
  
  

