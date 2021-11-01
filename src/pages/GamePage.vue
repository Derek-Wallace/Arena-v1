<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-10 mx-auto mt-5 game-grid">
        <div class="row d-flex">
        <div class="spot">A1</div>
        <div class="spot">A2</div>
        <div class="spot">A3</div>
        <div class="spot">A4</div>
        <div class="spot">A5</div>
        <div class="spot">A6</div>
        <div class="spot">A7</div>
        <div class="spot">A8</div>
        <div class="spot">A9</div>
        <div class="spot">A10</div>
        <div class="spot">A11 <i id="a11" class="mdi"></i></div>
        <div class="spot">A12 <i id="a12" @click="move" class="mdi mdi-shield-cross"></i></div>
        <div class="spot">A13</div>
        <div class="spot">A14</div>
        <div class="spot">A15</div>
        <div class="spot">A16</div>
        <div class="spot">A17</div>
        <div class="spot">A18</div>
        <div class="spot">A19</div>
        <div class="spot">A20</div>
        </div>
        <div class="row d-flex">
        <div class="spot">B1</div>
        <div class="spot">B2</div>
        <div class="spot">B3</div>
        <div class="spot">B4</div>
        <div class="spot">B5</div>
        <div class="spot">B6</div>
        <div class="spot">B7</div>
        <div class="spot">B8</div>
        <div class="spot">B9</div>
        <div class="spot">B10</div>
        <div class="spot">B11</div>
        <div class="spot">B12</div>
        <div class="spot">B13</div>
        <div class="spot">B14</div>
        <div class="spot">B15</div>
        <div class="spot">B16</div>
        <div class="spot">B17</div>
        <div class="spot">B18</div>
        <div class="spot">B19</div>
        <div class="spot">B20</div>
        </div>
        <div class="row d-flex">
        <div class="spot">C1</div>
        <div class="spot">C2</div>
        <div class="spot">C3</div>
        <div class="spot">C4</div>
        <div class="spot">C5</div>
        <div class="spot">C6</div>
        <div class="spot">C7</div>
        <div class="spot">C8</div>
        <div class="spot">C9</div>
        <div class="spot">C10</div>
        <div class="spot">C11</div>
        <div class="spot">C12</div>
        <div class="spot">C13</div>
        <div class="spot">C14</div>
        <div class="block">X</div>
        <div class="spot">C16</div>
        <div class="spot">C17</div>
        <div class="spot">C18</div>
        <div class="spot">C19</div>
        <div class="spot">C20</div>
        </div>
        <div class="row d-flex">
        <div class="spot">D1</div>
        <div class="spot">D2</div>
        <div class="spot">D3</div>
        <div class="spot">D4</div>
        <div class="spot">D5</div>
        <div class="spot">D6</div>
        <div class="spot">D7</div>
        <div class="spot">D8</div>
        <div class="spot">D9</div>
        <div class="spot">D10</div>
        <div class="spot">D11</div>
        <div class="spot">D12</div>
        <div class="spot">D13</div>
        <div class="spot">D14</div>
        <div class="block">X</div>
        <div class="block">X</div>
        <div class="spot">D17</div>
        <div class="spot">D18</div>
        <div class="spot">D19</div>
        <div class="spot">D20</div>
        </div>
        <div class="row d-flex">
        <div class="spot">E1</div>
        <div class="spot">E2</div>
        <div class="spot">E3</div>
        <div class="spot">E4</div>
        <div class="spot">E5</div>
        <div class="spot">E6</div>
        <div class="spot">E7</div>
        <div class="spot">E8</div>
        <div class="spot">E9</div>
        <div class="block">X</div>
        <div class="block">X</div>
        <div class="spot">E12</div>
        <div class="spot">E13</div>
        <div class="spot">E14</div>
        <div class="spot">E15</div>
        <div class="spot">E16</div>
        <div class="spot">E17</div>
        <div class="spot">E18</div>
        <div class="spot">E19</div>
        <div class="spot">E20</div>
        </div>
        <div class="row d-flex">
        <div class="spot">F1</div>
        <div class="spot">F2</div>
        <div class="spot">F3</div>
        <div class="spot">F4</div>
        <div class="spot">F5</div>
        <div class="spot">F6</div>
        <div class="spot">F7</div>
        <div class="spot">F8</div>
        <div class="spot">F9</div>
        <div class="block">X</div>
        <div class="block">X</div>
        <div class="spot">F12</div>
        <div class="spot">F13</div>
        <div class="spot">F14</div>
        <div class="spot">F15</div>
        <div class="spot">F16</div>
        <div class="spot">F17</div>
        <div class="spot">F18</div>
        <div class="spot">F19</div>
        <div class="spot">F20</div>
        </div>
        <div class="row d-flex">
        <div class="spot">G1</div>
        <div class="spot">G2</div>
        <div class="spot">G3</div>
        <div class="spot">G4</div>
        <div class="block">X</div>
        <div class="block">X</div>
        <div class="spot">G7</div>
        <div class="spot">G8</div>
        <div class="spot">G9</div>
        <div class="spot">G10</div>
        <div class="spot">G11</div>
        <div class="spot">G12</div>
        <div class="spot">G13</div>
        <div class="spot">G14</div>
        <div class="spot">G15</div>
        <div class="spot">G16</div>
        <div class="spot">G17</div>
        <div class="spot">G18</div>
        <div class="spot">G19</div>
        <div class="spot">G20</div>
        </div>
        <div class="row d-flex">
        <div class="spot">H1</div>
        <div class="spot">H2</div>
        <div class="spot">H3</div>
        <div class="spot">H4</div>
        <div class="spot">H5</div>
        <div class="block">X</div>
        <div class="spot">H7</div>
        <div class="spot">H8</div>
        <div class="spot">H9</div>
        <div class="spot">H10</div>
        <div class="spot">H11</div>
        <div class="spot">H12</div>
        <div class="spot">H13</div>
        <div class="spot">H14</div>
        <div class="spot">H15</div>
        <div class="spot">H16</div>
        <div class="spot">H17</div>
        <div class="spot">H18</div>
        <div class="spot">H19</div>
        <div class="spot">H20</div>
        </div>
        <div class="row d-flex">
        <div class="spot">I1</div>
        <div class="spot">I2</div>
        <div class="spot">I3</div>
        <div class="spot">I4</div>
        <div class="spot">I5</div>
        <div class="spot">I6</div>
        <div class="spot">I7</div>
        <div class="spot">I8</div>
        <div class="spot">I9</div>
        <div class="spot">I10</div>
        <div class="spot">I11</div>
        <div class="spot">I12</div>
        <div class="spot">I13</div>
        <div class="spot">I14</div>
        <div class="spot">I15</div>
        <div class="spot">I16</div>
        <div class="spot">I17</div>
        <div class="spot">I18</div>
        <div class="spot">I19</div>
        <div class="spot">I20</div>
        </div>
        <div class="row d-flex">
        <div class="spot">J1</div>
        <div class="spot">J2</div>
        <div class="spot">J3</div>
        <div class="spot">J4</div>
        <div class="spot">J5</div>
        <div class="spot">J6</div>
        <div class="spot">J7</div>
        <div class="spot">J8</div>
        <div class="spot">J9</div>
        <div class="spot">J10</div>
        <div class="spot">J11</div>
        <div class="spot">J12</div>
        <div class="spot">J13</div>
        <div class="spot">J14</div>
        <div class="spot">J15</div>
        <div class="spot">J16</div>
        <div class="spot">J17</div>
        <div class="spot">J18</div>
        <div class="spot">J19</div>
        <div class="spot">J20</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
setup() {
  return {
    move() {
      document.getElementById('a12').classList.remove('mdi-shield-cross')
      document.getElementById('a11').classList.add('mdi-shield-cross')
    }
  }
}
}
</script>

<style>
.game-grid {
  height: 77vh;
  width: 75vw;
  border: 2px solid black;
}
.spot {
  height: 71.8px;
  width: 71.8px;
  border: 2px solid black;
}
.block {
  height: 71.8px;
  width: 71.8px;
  border: 2px solid red;
  background-color: red;
}
</style>