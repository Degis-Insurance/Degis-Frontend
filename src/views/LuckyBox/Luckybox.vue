<template>
  <base-header type="" class="pb-6 pb-8 pt-4">
    <h1 class="fw-7 d-g1 fs-34 mb-4">The Degis Lucky Box</h1>
    <stats-card style=" width: 100%; background-size: 100% 100%; background-repeat: no-repeat; background-image: url('img/homepage/degis-lucky-box.png');">
      <div class="container" style="height: 620px">
        <div class="row row-grid align-items-center">
          <h1 class="fw-7 d-g1 fs-34 pt-8" style="margin: auto">The Degis Lucky Box</h1>
        </div>
        <div class="row align-items-center">
          <h1 class="fw-9 d-p pt-4" style="font-size: 60px; margin: auto; text-align: center">$272,786</h1>
        </div>
        <div class="row align-items-center">
          <h5 class="fw-9 d-g2 fs-24 ma pt-4">IN PRIZES!</h5>
        </div>
        <div class="row row-grid align-items-center">
          <base-button style="margin: 5% auto; padding: 1% 5%" @click="modals.BuyTickets = true">Buy Tickets1</base-button>
        </div>
      </div>
    </stats-card>

    <stats-card>
      <div class="container-fluid">
        <div class="row row-grid align-items-center justify-content-between pt-3 pb-2">
          <div>
            <h2 class="fw-7 d-g1 fs-28">Finished Rounds ></h2>
            <!--            <h4 class="fw-4 d-p fs-14 pt-1 pb-3" style="margin: auto" @click="modals.WinningRules = true">Winning rules ></h4>-->
          </div>
          <div class="d-flex">
            <h4 class="fw-4 d-p fs-14 pt-1 pb-3" style="margin: auto" @click="modals.WinningRules = true">Winning rules ></h4>
            <!--            <base-button @click="modals.PendingPrize = true">PENDING PRIZE</base-button>-->
          </div>
        </div>


        <el-tabs type="" :stretch="true">
          <el-tab-pane>
            <template #label><p class="fw-7 d-g3 fs-16">ALL LOTTERY ROUND</p></template>
            <el-table :data="roundData" class="dg-cardtable" header-cell-style="text-align: center; height: 70px" cell-style="text-align: center; height: 70px">
              <el-table-column prop="round" label="ROUND NO.">
                <template #default="scope">
                  <p class="fw-7 d-g1 fs-16 ma"># {{ scope.row.round }}</p>
                </template>
              </el-table-column>
              <el-table-column prop="prizenumber" label="PRIZE NUMBER">
                <template #default="scope">
                  <img v-for="num in scope.row.prizenumber" :src="'img/luckybox/num-'+ num +'.png'" style="max-width: 44px; max-height: 44px;"/>
                </template>
              </el-table-column>
              <el-table-column prop="drawtime" label="DRAW TIME">
                <template #default="scope">
                  <p class="fw-7 d-g1 fs-16 ma">{{ scope.row.drawtime }}</p>
                </template>
              </el-table-column>
              <el-table-column prop="prizepot" label="PRIZE POT">
                <template #default="scope">
                  <p class="fw-7 d-p fs-24 ma">${{ scope.row.prizepot }}</p>
                </template>
              </el-table-column>
              <el-table-column prop="view" label="VIEW">
                <template #default="scope">
                  <base-button @click="modals.LbDetails = true">View</base-button>
                </template>
              </el-table-column>
            </el-table>
            <div class="demo-pagination-block pt-4 pb-2" align="right">
              <el-pagination
                  :currentPage="12"
                  :page-size="1"
                  layout="prev, pager, next, jumper"
                  :total="12"
                  @size-change="handleSizeChange"
                  @current-change="handleCurrentChange"
              >
              </el-pagination>
            </div>
          </el-tab-pane>

          <el-tab-pane>
            <template #label><p class="fw-7 d-g3 fs-16">MY LOTTERY</p></template>
            <el-table :data="lotteryData" class="dg-cardtable" header-cell-style="text-align: center; height: 70px" cell-style="text-align: center; height: 70px">
              <el-table-column prop="lorreryid" label="LOTTERY ID">
                <template #default="scope">
                  <p class="fw-7 d-g1 fs-16 ma">{{ scope.row.lorreryid }}</p>
                </template>
              </el-table-column>
              <el-table-column prop="number" label="LOTTERY NUMBER">
                <template #default="scope">
                  <img v-for="num in scope.row.number" :src="'img/luckybox/num-'+ num +'.png'" style="max-width: 44px; max-height: 44px;"/>
                </template>
              </el-table-column>
              <el-table-column prop="buylotteryid" label="BUY LOTTERY ID">
                <template #default="scope">
                  <p class="fw-7 d-g1 fs-16 ma">{{ scope.row.buylotteryid }}</p>
                </template>
              </el-table-column>
              <el-table-column prop="isredeemed" label="IS REDEEMED">
                <template #default="scope">
                  <p class="fw-7 d-g1 fs-16 ma">{{ scope.row.isredeemed }}</p>
                </template>
              </el-table-column>
              <el-table-column prop="redeemlotteryid" label="REDEEM LOTTERY ID">
                <template #default="scope">
                  <p class="fw-7 d-g1 fs-16 ma">{{ scope.row.redeemlotteryid }}</p>
                </template>
              </el-table-column>
              <el-table-column prop="action" label="ACTION">
                <template #default="scope">
                  <base-button>Refund</base-button>
                </template>
              </el-table-column>
            </el-table>
            <div class="demo-pagination-block pt-4 pb-2" align="right">
              <el-pagination
                  :currentPage="1"
                  :page-size="1"
                  layout="prev, pager, next, jumper"
                  :total="1"
                  @size-change="handleSizeChange"
                  @current-change="handleCurrentChange"
              >
              </el-pagination>
            </div>
          </el-tab-pane>
        </el-tabs>


        <!--                <el-tabs v-model="activeName">-->
        <!--                  <el-tab-pane label="All History" name="AllHistory">-->
        <!--                    <div style="padding: 0 3%">-->
        <!--                      <div class="row justify-content-between pt-4">-->
        <!--                        <h4 class="fw-7 d-g1 fs-16">Winning Number</h4>-->
        <!--                        <h4 class="fw-4 d-g4 fs-14">Drawn <span class="fw-7 d-g3"> 20:00, 15/10/2021</span></h4>-->
        <!--                      </div>-->
        <!--                      <div class="pt-2">-->
        <!--                        <div style="background-color: #F2F2F2; border-radius: 12px; height: 88px">-->
        <!--                          <div class="row">-->
        <!--                            <div class="col-xl-3"></div>-->
        <!--                            <div class="col-xl-6 d-flex justify-content-between">-->
        <!--                              <img :src="'img/luckybox/num-'+num[0]+'.png'" style="max-width: 65px; max-height: 66px; margin-top: 11px">-->
        <!--                              <img :src="'img/luckybox/num-'+num[1]+'.png'" style="max-width: 65px; max-height: 66px; margin-top: 11px">-->
        <!--                              <img :src="'img/luckybox/num-'+num[2]+'.png'" style="max-width: 65px; max-height: 66px; margin-top: 11px">-->
        <!--                              <img :src="'img/luckybox/num-'+num[3]+'.png'" style="max-width: 65px; max-height: 66px; margin-top: 11px">-->
        <!--                            </div>-->
        <!--                            <div class="col-xl-3"></div>-->
        <!--                          </div>-->
        <!--                        </div>-->
        <!--                      </div>-->
        <!--                      <div class="row justify-content-between pt-4">-->
        <!--                        <div>-->
        <!--                          <h4 class="fw-7 d-g1 fs-16 pt-2">Prize Pot: <span class="fw-7 d-p fs-24">$272,786</span></h4>-->
        <!--                          <h4 class="fw-4 d-p fs-14 pt-3" @click="modals.Details = true">Details ></h4>-->
        <!--                        </div>-->

        <!--                        <div class="demo-pagination-block pt-5">-->
        <!--                          <el-pagination-->
        <!--                            :currentPage="124"-->
        <!--                            :page-size="1"-->
        <!--                            layout="prev, pager, next, jumper"-->
        <!--                            :total="124"-->
        <!--                            @size-change="handleSizeChange"-->
        <!--                            @current-change="handleCurrentChange"-->
        <!--                          >-->
        <!--                          </el-pagination>-->
        <!--                        </div>-->

        <!--                      </div>-->
        <!--                    </div>-->
        <!--                  </el-tab-pane>-->

        <!--                  <el-tab-pane label="Your History" name="YourHistory">-->
        <!--                    <div style="padding: 0 3%">-->
        <!--                      <div class="row justify-content-between pt-4">-->
        <!--                        <h4 class="fw-7 d-g1 fs-16">Your Number</h4>-->
        <!--                        <h4 class="fw-4 d-g4 fs-14">Drawn <span class="fw-7 d-g3"> 20:00, 15/10/2021</span></h4>-->
        <!--                      </div>-->
        <!--                      <div class="pt-2">-->
        <!--                        <div style="background-color: #F2F2F2; border-radius: 12px; height: 88px">-->
        <!--                          <div class="row">-->
        <!--                            <div class="col-xl-3"></div>-->
        <!--                            <div class="col-xl-6 d-flex justify-content-between">-->
        <!--                              <img :src="'img/luckybox/num-'+num[3]+'.png'" style="max-width: 65px; max-height: 66px; margin-top: 11px">-->
        <!--                              <img :src="'img/luckybox/num-'+num[0]+'.png'" style="max-width: 65px; max-height: 66px; margin-top: 11px">-->
        <!--                              <img :src="'img/luckybox/num-'+num[2]+'.png'" style="max-width: 65px; max-height: 66px; margin-top: 11px">-->
        <!--                              <img :src="'img/luckybox/num-'+num[1]+'.png'" style="max-width: 65px; max-height: 66px; margin-top: 11px">-->
        <!--                            </div>-->
        <!--                            <div class="col-xl-3"></div>-->
        <!--                          </div>-->
        <!--                        </div>-->
        <!--                      </div>-->
        <!--                      <div class="row justify-content-between pt-4">-->
        <!--                        <div>-->
        <!--                          <h4 class="fw-7 d-g1 fs-16 pt-2">Prize Pot: <span class="fw-7 d-p fs-24">$272,786</span></h4>-->
        <!--                          <h4 class="fw-4 d-p fs-14 pt-3" @click="modals.Details = true">Details ></h4>-->
        <!--                        </div>-->

        <!--                        <div class="demo-pagination-block pt-5">-->
        <!--                          <el-pagination-->
        <!--                            :currentPage="124"-->
        <!--                            :page-size="1"-->
        <!--                            layout="prev, pager, next, jumper"-->
        <!--                            :total="124"-->
        <!--                            @size-change="handleSizeChange"-->
        <!--                            @current-change="handleCurrentChange"-->
        <!--                          >-->
        <!--                          </el-pagination>-->
        <!--                        </div>-->

        <!--                      </div>-->
        <!--                    </div>-->

        <!--                  </el-tab-pane>-->
        <!--                </el-tabs>-->
      </div>

    </stats-card>


    <!--    <div class="row">-->
    <!--      <div class="col-3">-->
    <!--        <stats-card>-->
    <!--          <div class="container-fluid" style="height: 450px">-->
    <!--            <div class="row row-grid align-items-center">-->
    <!--              <h2 class="fw-7 d-g1 fs-28 pt-3">Next Draw</h2>-->
    <!--            </div>-->
    <!--            <div class="row">-->
    <!--              <h3 class="fw-7 d-g1 fs-16 pt-3">Round #124</h3>-->
    <!--            </div>-->
    <!--            <div class="row">-->
    <!--              <h4 class="fw-5 d-g4 fs-14 pt-2">prize Pot</h4>-->
    <!--            </div>-->
    <!--            <div class="row">-->
    <!--              <h4 class="fw-7 d-p fs-24 pt-2">$272,786</h4>-->
    <!--            </div>-->
    <!--            <div class="row">-->
    <!--              <h4 class="fw-5 d-g4 fs-14 pt-2">End in</h4>-->
    <!--            </div>-->
    <!--            <div class="row">-->
    <!--              <h3 class="fw-7 d-g1 fs-16 pt-2">20:00, 15/10/2021</h3>-->
    <!--            </div>-->
    <!--            <div class="row pt-4">-->
    <!--              <base-button-->
    <!--                  style="margin: 3% auto; padding: 3% 8%; width: 100%"-->
    <!--                  @click="modals.BuyTickets = true"-->
    <!--              >Buy Tickets-->
    <!--              </base-button-->
    <!--              >-->
    <!--            </div>-->
    <!--            <div class="row">-->
    <!--              <h4 class="fw-4 d-p fs-14 pt-3" style="margin: auto" @click="modals.WinningRules = true">Winning rules ></h4>-->
    <!--            </div>-->
    <!--          </div>-->
    <!--        </stats-card>-->
    <!--      </div>-->

    <!--      <div class="col-9">-->
    <!--        <stats-card>-->
    <!--          <div class="container-fluid" style="height: 450px">-->
    <!--            <div class="row row-grid align-items-center justify-content-between pt-3 pb-2">-->
    <!--              <h2 class="fw-7 d-g1 fs-28 ">Finished Rounds ></h2>-->
    <!--              <div class="d-flex">-->
    <!--                <base-button @click="modals.PendingPrize = true">PENDING PRIZE</base-button>-->
    <!--              </div>-->
    <!--            </div>-->

    <!--            <div class="row">-->
    <!--              <div class="col-12">-->

    <!--                <el-tabs type="" :stretch="true">-->

    <!--                  <el-tab-pane label="Policies I Created">-->
    <!--                    <template #label><p class="fw-7 d-g3 fs-16">ALL LOTTERY ROUND</p></template>-->
    <!--                    <el-table :data="tableData" class="dg-cardtable" header-cell-style="text-align: center; height: 70px" cell-style="text-align: center; height: 70px">-->
    <!--                      <el-table-column prop="round" label="ROUND NO."/>-->
    <!--                      <el-table-column prop="prizenumber" label="PRIZE NUMBER"/>-->
    <!--                      <el-table-column prop="drawtime" label="DRAW TIME"/>-->
    <!--                      <el-table-column prop="prizepot" label="PRIZE POT"/>-->
    <!--                      <el-table-column prop="arrivetime" label="ARRIVE TIME"/>-->
    <!--                      <el-table-column prop="premium" label="PREMIUM"/>-->
    <!--                    </el-table>-->

    <!--                  </el-tab-pane>-->
    <!--                  <el-tab-pane>-->
    <!--                    <template #label><p class="fw-7 d-g3 fs-16">MY LOTTERY</p></template>-->
    <!--                    <el-table :data="tableData" class="dg-cardtable" header-cell-style="text-align: center; height: 70px" cell-style="text-align: center; height: 70px">-->
    <!--                      <el-table-column prop="lorreryid" label="LOTTERY ID"/>-->
    <!--                      <el-table-column prop="number" label="LOTTERY NUMBER"/>-->
    <!--                      <el-table-column prop="buylotteryid" label="BUY LOTTERY ID"/>-->
    <!--                      <el-table-column prop="isredeemed" label="IS REDEEMED"/>-->
    <!--                      <el-table-column prop="redeemlotteryid" label="REDEEM LOTTERY ID"/>-->
    <!--                      <el-table-column prop="premium" label="PREMIUM"/>-->
    <!--                    </el-table>-->
    <!--                  </el-tab-pane>-->
    <!--                </el-tabs>-->


    <!--                &lt;!&ndash;                <el-tabs v-model="activeName">&ndash;&gt;-->
    <!--                &lt;!&ndash;                  <el-tab-pane label="All History" name="AllHistory">&ndash;&gt;-->
    <!--                &lt;!&ndash;                    <div style="padding: 0 3%">&ndash;&gt;-->
    <!--                &lt;!&ndash;                      <div class="row justify-content-between pt-4">&ndash;&gt;-->
    <!--                &lt;!&ndash;                        <h4 class="fw-7 d-g1 fs-16">Winning Number</h4>&ndash;&gt;-->
    <!--                &lt;!&ndash;                        <h4 class="fw-4 d-g4 fs-14">Drawn <span class="fw-7 d-g3"> 20:00, 15/10/2021</span></h4>&ndash;&gt;-->
    <!--                &lt;!&ndash;                      </div>&ndash;&gt;-->
    <!--                &lt;!&ndash;                      <div class="pt-2">&ndash;&gt;-->
    <!--                &lt;!&ndash;                        <div style="background-color: #F2F2F2; border-radius: 12px; height: 88px">&ndash;&gt;-->
    <!--                &lt;!&ndash;                          <div class="row">&ndash;&gt;-->
    <!--                &lt;!&ndash;                            <div class="col-xl-3"></div>&ndash;&gt;-->
    <!--                &lt;!&ndash;                            <div class="col-xl-6 d-flex justify-content-between">&ndash;&gt;-->
    <!--                &lt;!&ndash;                              <img :src="'img/luckybox/num-'+num[0]+'.png'" style="max-width: 65px; max-height: 66px; margin-top: 11px">&ndash;&gt;-->
    <!--                &lt;!&ndash;                              <img :src="'img/luckybox/num-'+num[1]+'.png'" style="max-width: 65px; max-height: 66px; margin-top: 11px">&ndash;&gt;-->
    <!--                &lt;!&ndash;                              <img :src="'img/luckybox/num-'+num[2]+'.png'" style="max-width: 65px; max-height: 66px; margin-top: 11px">&ndash;&gt;-->
    <!--                &lt;!&ndash;                              <img :src="'img/luckybox/num-'+num[3]+'.png'" style="max-width: 65px; max-height: 66px; margin-top: 11px">&ndash;&gt;-->
    <!--                &lt;!&ndash;                            </div>&ndash;&gt;-->
    <!--                &lt;!&ndash;                            <div class="col-xl-3"></div>&ndash;&gt;-->
    <!--                &lt;!&ndash;                          </div>&ndash;&gt;-->
    <!--                &lt;!&ndash;                        </div>&ndash;&gt;-->
    <!--                &lt;!&ndash;                      </div>&ndash;&gt;-->
    <!--                &lt;!&ndash;                      <div class="row justify-content-between pt-4">&ndash;&gt;-->
    <!--                &lt;!&ndash;                        <div>&ndash;&gt;-->
    <!--                &lt;!&ndash;                          <h4 class="fw-7 d-g1 fs-16 pt-2">Prize Pot: <span class="fw-7 d-p fs-24">$272,786</span></h4>&ndash;&gt;-->
    <!--                &lt;!&ndash;                          <h4 class="fw-4 d-p fs-14 pt-3" @click="modals.Details = true">Details ></h4>&ndash;&gt;-->
    <!--                &lt;!&ndash;                        </div>&ndash;&gt;-->

    <!--                &lt;!&ndash;                        <div class="demo-pagination-block pt-5">&ndash;&gt;-->
    <!--                &lt;!&ndash;                          <el-pagination&ndash;&gt;-->
    <!--                &lt;!&ndash;                            :currentPage="124"&ndash;&gt;-->
    <!--                &lt;!&ndash;                            :page-size="1"&ndash;&gt;-->
    <!--                &lt;!&ndash;                            layout="prev, pager, next, jumper"&ndash;&gt;-->
    <!--                &lt;!&ndash;                            :total="124"&ndash;&gt;-->
    <!--                &lt;!&ndash;                            @size-change="handleSizeChange"&ndash;&gt;-->
    <!--                &lt;!&ndash;                            @current-change="handleCurrentChange"&ndash;&gt;-->
    <!--                &lt;!&ndash;                          >&ndash;&gt;-->
    <!--                &lt;!&ndash;                          </el-pagination>&ndash;&gt;-->
    <!--                &lt;!&ndash;                        </div>&ndash;&gt;-->

    <!--                &lt;!&ndash;                      </div>&ndash;&gt;-->
    <!--                &lt;!&ndash;                    </div>&ndash;&gt;-->
    <!--                &lt;!&ndash;                  </el-tab-pane>&ndash;&gt;-->

    <!--                &lt;!&ndash;                  <el-tab-pane label="Your History" name="YourHistory">&ndash;&gt;-->
    <!--                &lt;!&ndash;                    <div style="padding: 0 3%">&ndash;&gt;-->
    <!--                &lt;!&ndash;                      <div class="row justify-content-between pt-4">&ndash;&gt;-->
    <!--                &lt;!&ndash;                        <h4 class="fw-7 d-g1 fs-16">Your Number</h4>&ndash;&gt;-->
    <!--                &lt;!&ndash;                        <h4 class="fw-4 d-g4 fs-14">Drawn <span class="fw-7 d-g3"> 20:00, 15/10/2021</span></h4>&ndash;&gt;-->
    <!--                &lt;!&ndash;                      </div>&ndash;&gt;-->
    <!--                &lt;!&ndash;                      <div class="pt-2">&ndash;&gt;-->
    <!--                &lt;!&ndash;                        <div style="background-color: #F2F2F2; border-radius: 12px; height: 88px">&ndash;&gt;-->
    <!--                &lt;!&ndash;                          <div class="row">&ndash;&gt;-->
    <!--                &lt;!&ndash;                            <div class="col-xl-3"></div>&ndash;&gt;-->
    <!--                &lt;!&ndash;                            <div class="col-xl-6 d-flex justify-content-between">&ndash;&gt;-->
    <!--                &lt;!&ndash;                              <img :src="'img/luckybox/num-'+num[3]+'.png'" style="max-width: 65px; max-height: 66px; margin-top: 11px">&ndash;&gt;-->
    <!--                &lt;!&ndash;                              <img :src="'img/luckybox/num-'+num[0]+'.png'" style="max-width: 65px; max-height: 66px; margin-top: 11px">&ndash;&gt;-->
    <!--                &lt;!&ndash;                              <img :src="'img/luckybox/num-'+num[2]+'.png'" style="max-width: 65px; max-height: 66px; margin-top: 11px">&ndash;&gt;-->
    <!--                &lt;!&ndash;                              <img :src="'img/luckybox/num-'+num[1]+'.png'" style="max-width: 65px; max-height: 66px; margin-top: 11px">&ndash;&gt;-->
    <!--                &lt;!&ndash;                            </div>&ndash;&gt;-->
    <!--                &lt;!&ndash;                            <div class="col-xl-3"></div>&ndash;&gt;-->
    <!--                &lt;!&ndash;                          </div>&ndash;&gt;-->
    <!--                &lt;!&ndash;                        </div>&ndash;&gt;-->
    <!--                &lt;!&ndash;                      </div>&ndash;&gt;-->
    <!--                &lt;!&ndash;                      <div class="row justify-content-between pt-4">&ndash;&gt;-->
    <!--                &lt;!&ndash;                        <div>&ndash;&gt;-->
    <!--                &lt;!&ndash;                          <h4 class="fw-7 d-g1 fs-16 pt-2">Prize Pot: <span class="fw-7 d-p fs-24">$272,786</span></h4>&ndash;&gt;-->
    <!--                &lt;!&ndash;                          <h4 class="fw-4 d-p fs-14 pt-3" @click="modals.Details = true">Details ></h4>&ndash;&gt;-->
    <!--                &lt;!&ndash;                        </div>&ndash;&gt;-->

    <!--                &lt;!&ndash;                        <div class="demo-pagination-block pt-5">&ndash;&gt;-->
    <!--                &lt;!&ndash;                          <el-pagination&ndash;&gt;-->
    <!--                &lt;!&ndash;                            :currentPage="124"&ndash;&gt;-->
    <!--                &lt;!&ndash;                            :page-size="1"&ndash;&gt;-->
    <!--                &lt;!&ndash;                            layout="prev, pager, next, jumper"&ndash;&gt;-->
    <!--                &lt;!&ndash;                            :total="124"&ndash;&gt;-->
    <!--                &lt;!&ndash;                            @size-change="handleSizeChange"&ndash;&gt;-->
    <!--                &lt;!&ndash;                            @current-change="handleCurrentChange"&ndash;&gt;-->
    <!--                &lt;!&ndash;                          >&ndash;&gt;-->
    <!--                &lt;!&ndash;                          </el-pagination>&ndash;&gt;-->
    <!--                &lt;!&ndash;                        </div>&ndash;&gt;-->

    <!--                &lt;!&ndash;                      </div>&ndash;&gt;-->
    <!--                &lt;!&ndash;                    </div>&ndash;&gt;-->

    <!--                &lt;!&ndash;                  </el-tab-pane>&ndash;&gt;-->
    <!--                &lt;!&ndash;                </el-tabs>&ndash;&gt;-->
    <!--              </div>-->
    <!--            </div>-->

    <!--          </div>-->
    <!--        </stats-card>-->
    <!--      </div>-->
    <!--    </div>-->

  </base-header>

  <buy-tickets v-model:show="modals.BuyTickets">
    <template v-slot:footer>
      <base-button style="width: 100%; height: 100%" @click="modals.BuyTickets = false">Buy Tickets2</base-button>
    </template>
  </buy-tickets>

  <pending-prize v-model:show="modals.PendingPrize"></pending-prize>
  <lb-details v-model:show="modals.LbDetails"></lb-details>
  <winning-rules v-model:show="modals.WinningRules"></winning-rules>
</template>

<script>
import BuyTickets from "./BuyTickets";
import PendingPrize from "./PendingPrize";
import LbDetails from "./LbDetails";
import WinningRules from "./WinningRules";
import BaseButton from "../../components/BaseButton";
import {
  getMockUSD,
  getDegis,
  getDegisLottery,
} from "../../utils/contractInstance";

export default {
  name: "luckybox",
  components: {
    BaseButton,
    BuyTickets,
    PendingPrize,
    LbDetails,
    WinningRules,
  },
  data() {
    return {
      num: [3, 5, 6, 7],
      // activeName: 'AllHistory',
      roundData: [
        {
          round: "124",
          prizenumber: [3, 4, 6, 7],
          drawtime: "20:00, 15/10/2021",
          prizepot: "272,786",
        },
        {
          round: "123",
          prizenumber: [2, 9, 0, 3],
          drawtime: "20:00, 08/10/2021",
          prizepot: "112,786",
        },
        {
          round: "122",
          prizenumber: [4, 9, 1, 0],
          drawtime: "20:00, 01/10/2021",
          prizepot: "259,726",
        },
      ],
      lotteryData: [
        {
          lorreryid: "0x9547342134",
          number: [3, 6, 8, 9],
          buylotteryid: 120,
          isredeemed: "NO",
          redeemlotteryid: "",
        },
        {
          lorreryid: "0x3453452435",
          number: [2, 6, 3, 2],
          buylotteryid: 110,
          isredeemed: "NO",
          redeemlotteryid: "",
        },
        {
          lorreryid: "0x2435453454",
          number: [3, 7, 2, 5],
          buylotteryid: 105,
          isredeemed: "YES",
          redeemlotteryid: 108,
        },
      ],
      modals: {
        BuyTickets: false,
        PendingPrize: false,
        LbDetails: false,
        WinningRules: false,
      },
    };
  },

  computed: {
    currentAccount() {
      return this.$store.state.selectedAccount;
    },
  },

  watch: {
    "$store.state.selectedAccount": function (newVal) {
      this.showLotteryInfoEvent();
      this.showUserInfoEvent();
    },
  },

  mounted() {
    this.showLotteryInfoEvent();
    this.showUserInfoEvent();
  },

  methods: {
    timestampToTime(timestamp) {
      let date = new Date(timestamp);
      var Y, M, D, h, m, s;
      Y = date.getFullYear() + "-";
      M =
        (date.getMonth() + 1 < 10
          ? "0" + (date.getMonth() + 1)
          : date.getMonth() + 1) + "-";
      (D = (date.getDate() < 10 ? "0" + date.getDate() : date.getDate()) + " "),
        (h =
          (date.getHours() < 10 ? "0" + date.getHours() : date.getHours()) +
          ":");
      m =
        (date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()) +
        ":";
      s = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
      return Y + M + D + h + m + s;
    },

    async showLotteryInfo(lotteryId) {
      const DegisLottery = await getDegisLottery();
      const account = this.$store.state.selectedAccount;

      console.log("currentLotteryId", lotteryId);
      const lotteryDetails = await DegisLottery.methods
        .viewLottery(lotteryId)
        .call();

      return lotteryDetails;
    },

    async showUserInfo(lotteryId) {
      const DegisLottery = await getDegisLottery();
      const account = this.$store.state.selectedAccount;

      const userTicketInfo = await DegisLottery.methods
        .viewUserInfoForLotteryId(account, lotteryId, 0, 40)
        .call();

      return userTicketInfo;
    },

    async claimAllTickets(lotteryId) {
      const DegisLottery = await getDegisLottery();
      const lotteryDetails = await DegisLottery.methods
        .viewLottery(lotteryId)
        .call();
      const account = this.$store.state.selectedAccount;
      if (lotteryDetails.status == 3) {
        const tx = await DegisLottery.methods.ClaimAllTickets(lotteryId).send({
          from: account,
        });
        console.log("Tx Hash:", tx.transactionHash);
      } else {
        alert("current round not claimable now");
      }
    },

    async redeemTicket(ticketIds) {
      const DegisLottery = await getDegisLottery();
      const account = this.$store.state.selectedAccount;
      const tx = await DegisLottery.methods
        .redeemTickets(ticketIds)
        .send({ from: account });
      console.log("Tx Hash:", tx.transactionHash);
    },

    getExactTime(time) {
      var date = new Date(time);
      var year = date.getFullYear() + '-';
      var month = (date.getMonth()+1 < 10 ? '0' + (date.getMonth()+1) : date.getMonth()+1) + '-';
      var dates = date.getDate() + ' ';
      var hour = date.getHours() + ':';
      var min = date.getMinutes() + ':';
      var second = date.getSeconds();
      return year + month + dates + hour + min + second ;
    },

    int2array(num)
    {
      var number = new Array()
      number[0]=parseInt(Number(num) / 1000) %10
      number[1]=parseInt(Number(num) / 100) %10
      number[2]=parseInt(Number(num) / 10) %10
      number[3]=parseInt(Number(num) / 1) %10
      return number
    },

    async showLotteryInfoEvent() {
      var lotteryId = 1;
      const lotteryDetails = await this.showLotteryInfo(lotteryId);
      console.log(lotteryDetails);

      var round = lotteryId;
      var drawtime = this.getExactTime(Number(lotteryDetails["startTime"]))
      var prizenumber = this.int2array(lotteryDetails["finalNumber"])
      var prizepot = (lotteryDetails["amountCollected"] / 1e18).toFixed(2)

      console.log("=====",lotteryDetails["amountCollected"])

      this.roundData= [{
          round: round,
          prizenumber: prizenumber,
          drawtime: drawtime,
          prizepot: prizepot,
      }]
    },

    async showUserInfoEvent() {
      var lotteryId = 1;
      const userTicketInfo = await this.showUserInfo(lotteryId);
      console.log(userTicketInfo);
      this.lotteryData = []

      for(var i=0; i<userTicketInfo[0].length; i++)
      {
        var lorreryid = userTicketInfo[0][i]
        var number = this.int2array(userTicketInfo[1][i])
        var buylotteryid = 1
        var isredeemed = "NO"
        this.lotteryData.push({lorreryid:lorreryid, number:number, buylotteryid:buylotteryid,isredeemed:isredeemed})
      }
    },

    async claimAllTicketsEvent() {
      var lotteryId = 1;
      await this.claimAllTickets(lotteryId);
    },

    async redeemTicketEvent() {
      var ticketIds = [3];
      await this.redeemTicket(ticketIds);
    },
  },
};
</script>

<style scoped>
.nd-2 {
  font-weight: bold;
  font-size: 16px;
  color: #2c2d2f;
}
</style>
