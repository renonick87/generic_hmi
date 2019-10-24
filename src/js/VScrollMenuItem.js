import React from 'react';
import { Link } from 'react-router-dom';
import SoftButtonImage from './Templates/Shared/SoftButtonImage'
import {ReactComponent as IconArrowRight} from '../img/icons/icon-arrow-right.svg';

export default class VScrollMenuItem extends React.Component {
    render() {
        return (
            <Link
                to={this.props.menuItem.link}
                className="vscrollmenu-item th-b-color th-bb-color-secondary"
                onClick={() => this.props.onSelection(this.props.appID, this.props.cmdID, this.props.menuID, this.props.isPerformingInteraction, this.props.interactionId)}>
                <div className="vscrollmenu-item__name">
                    <div className="t-large t-light th-f-color vscrollmenu-item-primary">
                        {this.props.menuItem.name}
                        <SoftButtonImage class="vscrollmenu-item-image" image={this.props.image ? this.props.image : null} 
                            imageType={this.props.imageType ? this.props.imageType : null}
                            isTemplate={this.props.isTemplate ? this.props.isTemplate : null}
                            theme={this.props.theme}
                        />   
                    </div>
                    <p className="t-large t-light th-f-color-secondary">{this.props.menuItem.info}</p>
                </div>
                <div>
                    <span className="svg-wrap">
                        {this.props.menuID ? <IconArrowRight/> : null}
                    </span>
                </div>
            </Link>
        )
    }
}
