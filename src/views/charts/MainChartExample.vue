<template>
    <CCard>
        <CCardBody>
            <CRow>
                <CCol sm="5">
                    <h4 id="traffic" class="card-title mb-0">Users and Works</h4>
                </CCol>
                <CCol sm="7" class="d-none d-md-block">
                    <CButtonGroup class="float-right mr-3">
                        <CButton
                                color="outline-secondary"
                                @click="getTotalUsers(1);getTotalWorks(1)"
                        >
                            Daily
                        </CButton>
                        <CButton
                                color="outline-secondary"
                                @click="getTotalUsers(2);getTotalWorks(2)"
                        >
                            Weekly
                        </CButton>
                        <CButton
                                color="outline-secondary"
                                @click="getTotalUsers(3);getTotalWorks(3)"
                        >
                            Monthly
                        </CButton>
                    </CButtonGroup>
                </CCol>
            </CRow>
            <CChartLine class="mt-3"
                        :datasets="defaultDatasets"
                        :options="defaultOptions"
                        :labels="date"
            />
        </CCardBody>
    </CCard>
</template>

<script>
    import {CChartLine} from '@coreui/vue-chartjs'
    import {getColor, hexToRgba} from '@coreui/utils/src'
    import CommonAdminMixin from "../../CommonAdminMixin";

    export default {
        name: 'MainChartExample',
        components: {
            CChartLine
        },
        data() {
            return {
                date: [],
                users: [],
                works: [],
            }
        },
        mixins: [CommonAdminMixin],
        computed: {
            defaultDatasets() {
                const brandSuccess = getColor('success') || '#4dbd74'
                const brandInfo = getColor('info') || '#20a8d8'
                const brandDanger = getColor('danger') || '#f86c6b'

                return [
                    {
                        label: 'Users',
                        backgroundColor: hexToRgba(brandInfo, 10),
                        borderColor: brandInfo,
                        pointHoverBackgroundColor: brandInfo,
                        borderWidth: 2,
                        data: this.users
                    },
                    {
                        label: 'Works',
                        backgroundColor: 'transparent',
                        borderColor: brandSuccess,
                        pointHoverBackgroundColor: brandSuccess,
                        borderWidth: 2,
                        data: this.works
                    },
                ]
            },
            defaultOptions() {
                return {
                    maintainAspectRatio: false,
                    legend: {
                        display: false
                    },
                    scales: {
                        xAxes: [{
                            gridLines: {
                                drawOnChartArea: false
                            }
                        }],
                        yAxes: [{
                            ticks: {
                                beginAtZero: true,
                                maxTicksLimit: 20,
                                stepSize: 5,
                                max: 100
                            },
                            gridLines: {
                                display: true
                            }
                        }]
                    },
                    elements: {
                        point: {
                            radius: 0,
                            hitRadius: 10,
                            hoverRadius: 4,
                            hoverBorderWidth: 3
                        }
                    }
                }
            }
        },
        created() {
            let that = this;
            that.getTotalUsers(1);
            that.getTotalWorks(1);
        },
        methods: {
            getTotalUsers: function (type) {
                let that = this;

                axios.get(APP_URL + '/get-total-users/' + type).then(response => {
                        response = response.data;
                        that.date = response.date;
                        that.users = response.amount;
                    }
                ).catch((error) => {

                });
            }, getTotalWorks: function (type) {
                let that = this;

                axios.get(APP_URL + '/get-total-works/' + type).then(response => {
                        response = response.data;
                        that.works = response.amount;
                    }
                ).catch((error) => {

                });
            },
        }

    }
</script>
