import Bars from'./Bars';
import Block from './Block';
import Marquee from './Marquee';
import NeonLogo from './NeonLogo';
import variables from '../../../scss/_exports.module.scss';

function Grid() {
    return (
        <div className="grid-container section-spacer">
            <div className="grid-sizer">
                <Marquee />
                <div className="grid">
                <div className="block-decorative block-25 block block-title-row">
                    <Bars/>
                </div>
                <div className="block-title block-50 block block-title-row">
                    <h1>Stark Minds</h1>
                    <p className="founded-text">was founded in 2021</p>
                    <p className="founded-subtext">(after years of consideration and planning)</p>
                </div>
                <div className="block-25 block block-title-row block-neon">
                    <NeonLogo />
                </div>
                    <div className="block-100 what-we-do">
                        <div className="block block-title block-25">
                            <h2>What We do</h2>
                        </div>
                        <div className="block block-content block-75">
                            <p>By studying complimentary ecoystems and carefully selecting partners we can make calm, catchy, calculated decisions</p>
                        </div>
                    </div>
                    <Block title="Talent" svg="spark" num="1">
                        Talent Curation<br></br>
                        Creative Direction<br></br>
                        Brand Design & Management<br></br>
                        Media & Promotion<br></br>
                    </Block>
                    <Block title="Future" svg="cave" num="2">
                        Market Research<br></br>
                        Business Strategy & Logistics<br></br>
                        Acceleration, Scaling and Pivoting<br></br>
                    </Block>
                    <Block title="Future" svg="asterick" num="3" color={variables['stark-green']}>
                        Web3 Solutions<br></br>
                        Metaverse Integration<br></br>
                        Tech Research, Investment, and Implementation<br></br>
                    </Block>
                </div>
            </div>
        </div>       
    )
}

export default Grid;