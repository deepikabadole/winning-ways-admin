<template>
  <CRow>
    <CCol sm="6" lg="3">
      <CWidgetDropdown color="primary" :header="totalUsers" text="Total Users">
<!--        <template #default>-->
<!--&lt;!&ndash;          <CDropdown&ndash;&gt;-->
<!--&lt;!&ndash;            color="transparent p-0"&ndash;&gt;-->
<!--&lt;!&ndash;            placement="bottom-end"&ndash;&gt;-->
<!--&lt;!&ndash;          >&ndash;&gt;-->
<!--&lt;!&ndash;            <template #toggler-content>&ndash;&gt;-->
<!--&lt;!&ndash;              <CIcon name="cil-settings"/>&ndash;&gt;-->
<!--&lt;!&ndash;            </template>&ndash;&gt;-->
<!--&lt;!&ndash;            <CDropdownItem>Action</CDropdownItem>&ndash;&gt;-->
<!--&lt;!&ndash;            <CDropdownItem>Another action</CDropdownItem>&ndash;&gt;-->
<!--&lt;!&ndash;            <CDropdownItem>Something else here...</CDropdownItem>&ndash;&gt;-->
<!--&lt;!&ndash;            <CDropdownItem disabled>Disabled action</CDropdownItem>&ndash;&gt;-->
<!--&lt;!&ndash;          </CDropdown>&ndash;&gt;-->
<!--        </template>-->
        <template #footer>
          <CChartLineSimple
            pointed
            class="mt-3 mx-3"
            style="height:70px"
            :data-points="[65, 59, 84, 84, 51, 55, 40]"
            point-hover-background-color="primary"
            label="Members"
            labels="months"
          />
        </template>
      </CWidgetDropdown>
    </CCol>
    <CCol sm="6" lg="3">
      <CWidgetDropdown color="info" :header="totalWorks" text="Total Works">
<!--        <template #default>-->
<!--&lt;!&ndash;          <CDropdown&ndash;&gt;-->
<!--&lt;!&ndash;            color="transparent p-0"&ndash;&gt;-->
<!--&lt;!&ndash;            placement="bottom-end"&ndash;&gt;-->
<!--&lt;!&ndash;            :caret="false"&ndash;&gt;-->
<!--&lt;!&ndash;          >&ndash;&gt;-->
<!--&lt;!&ndash;            <template #toggler-content>&ndash;&gt;-->
<!--&lt;!&ndash;              <CIcon name="cil-location-pin"/>&ndash;&gt;-->
<!--&lt;!&ndash;            </template>&ndash;&gt;-->
<!--&lt;!&ndash;            <CDropdownItem>Action</CDropdownItem>&ndash;&gt;-->
<!--&lt;!&ndash;            <CDropdownItem>Another action</CDropdownItem>&ndash;&gt;-->
<!--&lt;!&ndash;            <CDropdownItem>Something else here...</CDropdownItem>&ndash;&gt;-->
<!--&lt;!&ndash;            <CDropdownItem disabled>Disabled action</CDropdownItem>&ndash;&gt;-->
<!--&lt;!&ndash;          </CDropdown>&ndash;&gt;-->
<!--        </template>-->
        <template #footer>
          <CChartLineSimple
            pointed
            class="mt-3 mx-3"
            style="height:70px"
            :data-points="[1, 18, 9, 17, 34, 22, 11]"
            point-hover-background-color="info"
            :options="{ elements: { line: { tension: 0.00001 }}}"
            label="Members"
            labels="months"
          />
        </template>
      </CWidgetDropdown>
    </CCol>
    <CCol sm="6" lg="3">
      <CWidgetDropdown
        color="warning"
        :header="totalCategories"
        text="Total Categories"
      >
<!--        <template #default>-->
<!--          <CDropdown-->
<!--            color="transparent p-0"-->
<!--            placement="bottom-end"-->
<!--          >-->
<!--            <template #toggler-content>-->
<!--              <CIcon name="cil-settings"/>-->
<!--            </template>-->
<!--            <CDropdownItem>Action</CDropdownItem>-->
<!--            <CDropdownItem>Another action</CDropdownItem>-->
<!--            <CDropdownItem>Something else here...</CDropdownItem>-->
<!--            <CDropdownItem disabled>Disabled action</CDropdownItem>-->
<!--          </CDropdown>-->
<!--        </template>-->
        <template #footer>
          <CChartLineSimple
            class="mt-3"
            style="height:70px"
            background-color="rgba(255,255,255,.2)"
            :data-points="[78, 81, 80, 45, 34, 12, 40]"
            :options="{ elements: { line: { borderWidth: 2.5 }}}"
            point-hover-background-color="warning"
            label="Members"
            labels="months"
          />
        </template>
      </CWidgetDropdown>
    </CCol>
    <CCol sm="6" lg="3">
      <CWidgetDropdown
        color="danger"
        :header="totalSubcategories"
        text="Total Subcategories"
      >
<!--        <template #default>-->
<!--          <CDropdown-->
<!--            color="transparent p-0"-->
<!--            placement="bottom-end"-->
<!--          >-->
<!--            <template #toggler-content>-->
<!--             <CIcon name="cil-settings"/>-->
<!--            </template>-->
<!--            <CDropdownItem>Action</CDropdownItem>-->
<!--            <CDropdownItem>Another action</CDropdownItem>-->
<!--            <CDropdownItem>Something else here...</CDropdownItem>-->
<!--            <CDropdownItem disabled>Disabled action</CDropdownItem>-->
<!--          </CDropdown>-->
<!--        </template>-->
        <template #footer>
          <CChartBarSimple
            class="mt-3 mx-3"
            style="height:70px"
            background-color="rgb(250, 152, 152)"
            label="Members"
            labels="months"
          />
        </template>
      </CWidgetDropdown>
    </CCol>
  </CRow>
</template>

<script>
import { CChartLineSimple, CChartBarSimple } from '../charts/index.js'
import CommonAdminMixin from "../../CommonAdminMixin";

export default {
  name: 'WidgetsDropdown',
  components: { CChartLineSimple, CChartBarSimple },
  mixins:[CommonAdminMixin],
  data() {
    return {
      totalUsers: 0,
      totalWorks: 0,
      totalCategories: 0,
      totalSubcategories: 0
    }
  },
  created() {
    let that = this;
    that.getData();
  },
  methods: {
    getData: function () {
      let that = this;
      axios.get(APP_URL + '/get-total-data').then(response => {
                that.totalUsers = response.data.total_users;
                that.totalWorks = response.data.total_works;
                that.totalCategories = response.data.total_categories;
                that.totalSubcategories = response.data.total_subcategories;
              }
      ).catch((error) => {

      });
    },
  }

}
</script>
