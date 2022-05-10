import ClientBlock from './ClientBlock';

function ClientsSection() {
    return (
        <div className="client-section section-spacer">
            <h2>WHO WE WORK WITH</h2>
            <div className="client-block-container">
                <ClientBlock title="Individuals">
                    Sometimes there is enough talent, brilliance, or sheer hard-headedness in one single person to make a dramatic effect on music, art, fashion, science, you name it . We can work to understand your vision and refine your talents, while giving you access to the people and systems that will make your dream a dreamy reality.  
                </ClientBlock>
                <ClientBlock title="Start-ups & Collaborations">
                    If one mind can change a genre, a few minds working together might well change the world. Our small team knows and commands expertise from dozens of industries, entities, and philosophies. We can boost you from the doldrums to the stratosphere faster than you can say “cumulative neural network”.
                </ClientBlock>
                <ClientBlock title="Established Companies & Recognized Collectives">
                    Say goodbye to your next plateau, and say hello to your next leap in enterprise. We work our tails off to find you the next, most logical step in your journey toward a defined metric of success. We honestly know how hard you’ve worked to get this far, and we’re here to guide you into your next phase of rapid growth and fulfillment.
                </ClientBlock>
                <ClientBlock title="Major Industries & NGOs">
                Yup, we can do that too. No matter how large your organization is, or how many constituents you represent, there’s always a direction forward. (And it doesn’t have to crush your soul!) Our knowledge base spans continents and generations. We don’t look left or right, up or down. We look tangentially through global industries and establishments to find pitch-perfect solutions to problems you didn’t know you had. 
                </ClientBlock>
            </div>
        </div>
    )
}

export default ClientsSection;