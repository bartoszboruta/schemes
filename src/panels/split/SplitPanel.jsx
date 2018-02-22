import React, { Component } from 'react';
import { connect } from "react-redux";
import { updateData } from '../../actions/index';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Grid, Row } from 'react-bootstrap';
import { SliderPart, TogglePart, SelectPart } from "../parts";

class SplitPanel extends Component {
    getAdditionalHeaterSource(params) {
        switch (this.props.data[params.param].name) {
            case 'automatic_boiler':
                return <TogglePart
                    description={params.description}
                    param={params.param}
                    title={params.title}
                />;
            case 'heater':
                return <TogglePart
                    description={params.description}
                    param={params.param}
                    title={params.title}
                />;
            default:
                return null
        }
    }
    render() {
        return <MuiThemeProvider>
            <Grid>
                <Row className={'show-grid'}>

                    <Row>
                        <TogglePart param={'CWU'} title={'CWU'} description={'CWU part'}/>
                    </Row>
                    {
                        this.props.data.CWU.value &&
                            <div style={{ marginLeft: 20 }}>
                                <Row>
                                    <SliderPart param={'p128'} title={'T1'} description={'Value of T1 temperature'}/>
                                </Row>
                                <Row>
                                    <SelectPart
                                        description={'Choose additional heat source for CWU'}
                                        options={['heater', 'none']}
                                        param={'additionalHeaterSourceCWU'}
                                        title={'Additional CWU heat source'}
                                    />
                                </Row>
                                <Row>
                                    {
                                        this.getAdditionalHeaterSource({
                                            description: 'Switch CWU Heater source',
                                            param: 'additionalHeaterSourceCWU',
                                            title: 'CWU Heater Source'
                                        })
                                    }
                                </Row>
                            </div>
                    }
                    <Row>
                        <TogglePart param={'CO'} title={'CO'} description={'CO part'}/>
                    </Row>
                    {
                        this.props.data.CO.value &&
                        <div style={{ marginLeft: 20 }}>
                            <Row>
                                <SliderPart param={'p132'} title={'T2'} description={'Value of T2 temperature'}/>
                            </Row>
                            <Row>
                                <SelectPart
                                    description={'Choose additional heat source for CO'}
                                    options={['automatic_boiler', 'heater', 'none']}
                                    param={'additionalHeaterSourceCO'}
                                    title={'Additional CO source'}
                                />
                            </Row>
                            <Row>
                                {
                                    this.getAdditionalHeaterSource({
                                        description: 'Switch CO Heater source',
                                        param: 'additionalHeaterSourceCO',
                                        title: 'CO Heater Source'
                                    })
                                }
                            </Row>
                        </div>
                    }
                </Row>
            </Grid>
        </MuiThemeProvider>
    }
}

const mapStateToProps = (state) => {
    const { data } = state;
    return {
        data
    };
};

const mapDispatchToProps = ({
    updateData,
});


const ConnectedSplitPanel = connect(mapStateToProps, mapDispatchToProps)(SplitPanel);
export { ConnectedSplitPanel as SplitPanel }